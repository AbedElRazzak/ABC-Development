import { NextResponse } from "next/server";

export const runtime = "nodejs";

const brevoApiKey = process.env.BREVO_API_KEY;
const contactToEmail =
  process.env.CONTACT_TO_EMAIL || "abc.development.lb@outlook.com";
const brevoSenderEmail = process.env.BREVO_SENDER_EMAIL;
const brevoSenderName = process.env.BREVO_SENDER_NAME || "ABC Development";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  project?: unknown;
  message?: unknown;
  website?: unknown;
};

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function readBrevoError(response: Response) {
  const fallback = `Brevo request failed with status ${response.status}.`;

  try {
    const data = (await response.json()) as {
      code?: unknown;
      message?: unknown;
    };
    const message = typeof data.message === "string" ? data.message : fallback;
    const code = typeof data.code === "string" ? data.code : "brevo_error";

    return `${code}: ${message}`;
  } catch {
    try {
      const text = await response.text();
      return text || fallback;
    } catch {
      return fallback;
    }
  }
}

export async function POST(request: Request) {
  if (!brevoApiKey || !brevoSenderEmail) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }

  if (cleanText(payload.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = cleanText(payload.name, 120);
  const email = cleanText(payload.email, 160);
  const project = cleanText(payload.project, 120) || "General";
  const message = cleanText(payload.message, 4000);

  if (!name || !email || !message || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid name, email, and message." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": brevoApiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: brevoSenderName,
          email: brevoSenderEmail,
        },
        to: [
          {
            email: contactToEmail,
            name: "ABC Development",
          },
        ],
        replyTo: {
          email,
          name,
        },
        subject: `New project inquiry - ${project}`,
        textContent: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Project type: ${project}`,
          "",
          message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      const details = await readBrevoError(response);

      console.error("Brevo contact email failed:", details);

      return NextResponse.json(
        {
          error: "Could not send your message. Please try again.",
          ...(process.env.NODE_ENV !== "production" ? { details } : {}),
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const details =
      error instanceof Error ? error.message : "Unknown email delivery error.";

    console.error("Brevo contact email failed:", details);

    return NextResponse.json(
      {
        error: "Could not send your message. Please try again.",
        ...(process.env.NODE_ENV !== "production" ? { details } : {}),
      },
      { status: 502 }
    );
  }
}
