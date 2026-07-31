"use client";

import { useState, type FormEvent } from "react";

type SubmitStatus = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, project, message, website }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error || "Could not send your message.");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setProject("");
      setMessage("");
      setWebsite("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Could not send your message. Please try again."
      );
    }
  };

  const inputClass =
    "w-full bg-[var(--bg-alt)] border border-[var(--border)] rounded-[14px] px-4 py-3.5 text-[15px] outline-none focus:border-[var(--accent)] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-[13px] font-medium text-[var(--text-2)] mb-1.5 block">
            Name
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-[13px] font-medium text-[var(--text-2)] mb-1.5 block">
            Email
          </label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label className="text-[13px] font-medium text-[var(--text-2)] mb-1.5 block">
          Project type
        </label>
        <select
          value={project}
          onChange={(e) => setProject(e.target.value)}
          className={inputClass}
        >
          <option value="">Select an option</option>
          <option>Commerce OS</option>
          <option>Custom Website</option>
          <option>WordPress</option>
          <option>Shopify</option>
          <option>App Development</option>
          <option>Backend Development</option>
          <option>CMS</option>
          <option>Payment Gateways</option>
          <option>Data Migration</option>
          <option>Domains & Hosting</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label className="text-[13px] font-medium text-[var(--text-2)] mb-1.5 block">
          Tell us about the project
        </label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className={inputClass}
          placeholder="What are you trying to build?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--text)] dark:bg-[var(--accent)] text-[var(--bg)] dark:text-white px-6 py-3.5 rounded-full text-[15px] font-medium hover:-translate-y-0.5 hover:shadow-lg transition-all disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      <p
        className={`text-[12.5px] ${
          status === "error"
            ? "text-red-500"
            : status === "sent"
              ? "text-[var(--accent)]"
              : "text-[var(--text-2)]"
        }`}
        role="status"
        aria-live="polite"
      >
        {status === "sent"
          ? "Message sent. We'll get back to you soon."
          : status === "error"
            ? errorMessage
            : "Your message is sent directly from this page."}
      </p>
    </form>
  );
}
