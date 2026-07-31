import type { ServiceIconName } from "@/components/icons";

export type Service = {
  slug: string;
  name: string;
  navName: string;
  featured?: boolean;
  icon: ServiceIconName;
  eyebrow: string;
  tagline: string;
  description: string;
  capabilities: { title: string; desc: string; icon: ServiceIconName }[];
  process: { title: string; desc: string }[];
  stack: string[];
};

export const services: Service[] = [
  {
    slug: "commerce-os",
    name: "Commerce OS",
    navName: "Commerce OS",
    featured: true,
    icon: "cpu",
    eyebrow: "Flagship Platform",
    tagline: "One system to run your entire commerce business.",
    description:
      "Commerce OS is a custom-built operating system for your business — catalog, orders, inventory, payments, and storefront, unified into one platform instead of six disconnected tools. Built around how you actually work, not a template you have to work around.",
    capabilities: [
      { title: "Unified catalog & inventory", desc: "One source of truth across every sales channel, synced in real time.", icon: "layers" },
      { title: "Order & fulfillment engine", desc: "From checkout to delivery, tracked in a single pipeline.", icon: "server" },
      { title: "Built-in payments", desc: "Local and international gateways wired in from day one.", icon: "credit-card" },
      { title: "Storefront + admin", desc: "A fast customer-facing site paired with a clean back office.", icon: "layout" },
      { title: "Open by design", desc: "REST APIs so Commerce OS connects to whatever you already use.", icon: "code" },
      { title: "Built to scale", desc: "Starts as a lean core, grows module by module as you need it.", icon: "cpu" },
    ],
    process: [
      { title: "Map your operations", desc: "We start with how your business actually runs — not a generic template." },
      { title: "Build the core", desc: "Catalog, orders, and payments come online first, on your infrastructure." },
      { title: "Connect everything", desc: "Existing tools and data are migrated or integrated in, piece by piece." },
      { title: "Launch & support", desc: "You go live with a direct line to the person who built it." },
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "REST APIs", "Docker"],
  },
  {
    slug: "custom-websites",
    name: "Custom Websites",
    navName: "Custom Websites",
    icon: "code",
    eyebrow: "Built From Scratch",
    tagline: "A website with no template ceiling.",
    description:
      "When off-the-shelf builders run out of road, a custom build takes over. Full-stack websites built in React, Next.js, or Laravel — designed around your brand and built for real performance, not just a demo.",
    capabilities: [
      { title: "Custom design system", desc: "No theme constraints — every pixel is built for your brand.", icon: "layout" },
      { title: "Full-stack engineering", desc: "React or Next.js on the front end, Laravel or Node on the back.", icon: "code" },
      { title: "Performance-first build", desc: "Fast load times and clean Core Web Vitals, out of the box.", icon: "cpu" },
      { title: "SEO foundation", desc: "Semantic markup and structured data so search engines understand you.", icon: "globe" },
      { title: "CMS-ready", desc: "Editable content without touching code, when you need it.", icon: "layers" },
      { title: "API-connected", desc: "Talks to your other systems instead of living on an island.", icon: "exchange" },
    ],
    process: [
      { title: "Discovery", desc: "We define what the site needs to do, not just look like." },
      { title: "Design", desc: "A visual system tailored to your brand, reviewed with you at each step." },
      { title: "Build", desc: "Clean, tested code — no page-builder bloat." },
      { title: "Launch", desc: "Deployed, monitored, and handed off with documentation." },
    ],
    stack: ["React", "Next.js", "Laravel", "Tailwind CSS", "PostgreSQL"],
  },
  {
    slug: "wordpress",
    name: "WordPress Development",
    navName: "WordPress",
    icon: "layout",
    eyebrow: "WordPress",
    tagline: "WordPress, built properly.",
    description:
      "Theme setup, custom builds, security hardening, speed tuning, and ongoing maintenance. WordPress is powerful when it's built right — and a liability when it isn't. We do the former.",
    capabilities: [
      { title: "Custom theme builds", desc: "Designed for your brand, not a repurposed marketplace theme.", icon: "layout" },
      { title: "Security hardening", desc: "Locked-down configuration so you're not the next breach headline.", icon: "server" },
      { title: "Speed tuning", desc: "Caching, image, and query optimization for real-world load times.", icon: "cpu" },
      { title: "Plugin architecture", desc: "The right plugins, configured correctly, and nothing you don't need.", icon: "layers" },
      { title: "Backups & updates", desc: "Automated backups and a maintenance plan that keeps things current.", icon: "database" },
      { title: "SEO setup", desc: "Technical SEO configured correctly from launch.", icon: "globe" },
    ],
    process: [
      { title: "Audit or plan", desc: "Review an existing site or scope a new one from the ground up." },
      { title: "Build & configure", desc: "Theme, plugins, and hosting environment set up correctly." },
      { title: "Harden & optimize", desc: "Security and speed work most agencies skip." },
      { title: "Maintain", desc: "Ongoing updates and support after launch." },
    ],
    stack: ["WordPress", "PHP", "MySQL", "WooCommerce", "Elementor"],
  },
  {
    slug: "shopify",
    name: "Shopify Development",
    navName: "Shopify",
    icon: "shopping-bag",
    eyebrow: "Shopify",
    tagline: "Shopify, tailored to how you sell.",
    description:
      "Custom Shopify themes, app integrations, and storefront builds for brands that have outgrown the default templates — without leaving the Shopify ecosystem you already rely on.",
    capabilities: [
      { title: "Custom theme development", desc: "Built on Liquid, tailored to your catalog and brand.", icon: "layout" },
      { title: "App & API integrations", desc: "Connect Shopify to your CRM, ERP, or fulfillment tools.", icon: "exchange" },
      { title: "Checkout customization", desc: "A checkout flow tuned for conversion, within Shopify's rules.", icon: "credit-card" },
      { title: "Headless storefronts", desc: "Shopify as the backend, a fully custom front end on top.", icon: "code" },
      { title: "Migration to Shopify", desc: "Move your catalog, customers, and order history in cleanly.", icon: "database" },
      { title: "Ongoing support", desc: "Theme updates and fixes as Shopify itself evolves.", icon: "server" },
    ],
    process: [
      { title: "Scope", desc: "Decide between themed, customized, or headless Shopify." },
      { title: "Build", desc: "Theme and integrations developed against a staging store." },
      { title: "Migrate", desc: "Products, customers, and orders moved over safely." },
      { title: "Go live", desc: "Launch with monitoring and a support plan in place." },
    ],
    stack: ["Shopify", "Liquid", "Shopify API", "React", "Node.js"],
  },
  {
    slug: "app-development",
    name: "App Development",
    navName: "App Development",
    icon: "smartphone",
    eyebrow: "Mobile",
    tagline: "One codebase, both app stores.",
    description:
      "Cross-platform mobile apps for iOS and Android, built to feel native and ship without maintaining two separate codebases. From first prototype to App Store and Play Store release.",
    capabilities: [
      { title: "Cross-platform builds", desc: "One codebase targeting iOS and Android natively.", icon: "smartphone" },
      { title: "Native-feel UI", desc: "Interfaces that follow each platform's own conventions.", icon: "layout" },
      { title: "Backend & API integration", desc: "Connected to your existing systems or a new backend we build.", icon: "server" },
      { title: "Push notifications", desc: "Engagement infrastructure wired in from the start.", icon: "exchange" },
      { title: "App store deployment", desc: "Submission and release management for both stores.", icon: "globe" },
      { title: "Post-launch support", desc: "Updates as OS versions and store policies change.", icon: "cpu" },
    ],
    process: [
      { title: "Define the product", desc: "Core flows and platform scope, mapped before any code." },
      { title: "Design", desc: "UI built around iOS and Android conventions." },
      { title: "Build", desc: "Cross-platform development with native modules where needed." },
      { title: "Ship & support", desc: "Store submission, then ongoing updates." },
    ],
    stack: ["React Native", "TypeScript", "Node.js", "Firebase", "REST APIs"],
  },
  {
    slug: "backend-development",
    name: "Backend Development",
    navName: "Backend",
    icon: "server",
    eyebrow: "Infrastructure",
    tagline: "The part users never see, built to hold up anyway.",
    description:
      "Custom backends and RESTful APIs built in PHP, Node.js, or Python — the infrastructure layer that actually decides whether your product holds up under real usage.",
    capabilities: [
      { title: "RESTful APIs", desc: "Clean, documented APIs built around your product, not a generic spec.", icon: "code" },
      { title: "Database architecture", desc: "Schemas designed for the queries you'll actually run.", icon: "database" },
      { title: "Authentication & permissions", desc: "Secure, role-based access built in from the start.", icon: "server" },
      { title: "Third-party integrations", desc: "Payments, shipping, CRMs — wired into one coherent backend.", icon: "exchange" },
      { title: "Performance & scaling", desc: "Built to handle growth, not just the demo.", icon: "cpu" },
      { title: "Monitoring & logging", desc: "Visibility into what's happening in production.", icon: "layers" },
    ],
    process: [
      { title: "Architecture", desc: "Data model and API surface planned before implementation." },
      { title: "Build", desc: "Backend developed with tests around the critical paths." },
      { title: "Integrate", desc: "Connected to your front end and third-party services." },
      { title: "Deploy & monitor", desc: "Shipped to production with monitoring in place." },
    ],
    stack: ["Node.js", "PHP", "Python", "PostgreSQL", "Docker"],
  },
  {
    slug: "cms",
    name: "Content Management Systems",
    navName: "CMS",
    icon: "layers",
    eyebrow: "CMS",
    tagline: "Content your team can actually manage.",
    description:
      "Custom or headless CMS setups so your team can update content without filing a support ticket — while developers keep full control over how it's built.",
    capabilities: [
      { title: "Headless CMS setup", desc: "Content decoupled from presentation, editable from anywhere.", icon: "layers" },
      { title: "Custom content models", desc: "Structured around your actual content, not a generic blog template.", icon: "layout" },
      { title: "Role-based editing", desc: "The right people can edit the right things — nothing more.", icon: "server" },
      { title: "Multi-channel publishing", desc: "One piece of content, delivered to web, app, and beyond.", icon: "exchange" },
      { title: "Media management", desc: "Organized asset libraries instead of a messy uploads folder.", icon: "database" },
      { title: "Editor training", desc: "Your team leaves knowing how to actually use it.", icon: "globe" },
    ],
    process: [
      { title: "Model the content", desc: "Define what content types your site or app actually needs." },
      { title: "Build the CMS", desc: "Headless or traditional, configured around that model." },
      { title: "Connect the front end", desc: "Content flows into your website or app via API." },
      { title: "Hand off", desc: "Your team trained to manage content independently." },
    ],
    stack: ["Sanity", "Strapi", "WordPress", "Next.js", "GraphQL"],
  },
  {
    slug: "payment-gateways",
    name: "Payment Gateway Integrations",
    navName: "Payments",
    icon: "credit-card",
    eyebrow: "Payments",
    tagline: "Get paid, without the integration headache.",
    description:
      "Integration with Areeba, CyberSource, NetCommerce, and WishMoney — payment infrastructure that works the first time and reconciles cleanly on the back end.",
    capabilities: [
      { title: "Local & international gateways", desc: "Areeba, CyberSource, NetCommerce, WishMoney, and more.", icon: "credit-card" },
      { title: "Secure checkout flows", desc: "PCI-conscious implementation, built to reduce cart abandonment.", icon: "server" },
      { title: "Recurring billing", desc: "Subscriptions and installment plans, handled correctly.", icon: "exchange" },
      { title: "Reconciliation tooling", desc: "Payments that match your books, not just your database.", icon: "database" },
      { title: "Fraud & risk controls", desc: "Sensible checks that stop fraud without blocking real customers.", icon: "cpu" },
      { title: "Multi-currency support", desc: "Sell in the currencies your customers actually use.", icon: "globe" },
    ],
    process: [
      { title: "Choose the gateway", desc: "Matched to your market, currency, and business model." },
      { title: "Integrate", desc: "Checkout and backend wired to the gateway's API." },
      { title: "Test", desc: "Sandbox testing across every payment path before launch." },
      { title: "Go live & reconcile", desc: "Live payments, with reporting that actually adds up." },
    ],
    stack: ["Areeba", "CyberSource", "NetCommerce", "WishMoney", "REST APIs"],
  },
  {
    slug: "data-migration",
    name: "Data Migration",
    navName: "Data Migration",
    icon: "database",
    eyebrow: "Data",
    tagline: "Move platforms without losing history.",
    description:
      "Moving off a legacy system or switching platforms shouldn't mean losing years of orders, customers, and content. Careful, tested data migration that keeps everything intact.",
    capabilities: [
      { title: "Data audit", desc: "A full inventory of what exists before anything moves.", icon: "database" },
      { title: "Schema mapping", desc: "Old structure mapped cleanly to the new system.", icon: "exchange" },
      { title: "Scripted migration", desc: "Automated, repeatable scripts instead of manual copy-paste.", icon: "code" },
      { title: "Validation & testing", desc: "Every record checked against the source before cutover.", icon: "server" },
      { title: "Zero-downtime cutover", desc: "Migration planned around your business, not the other way around.", icon: "cpu" },
      { title: "Rollback plan", desc: "A safety net in case anything needs to be reversed.", icon: "layers" },
    ],
    process: [
      { title: "Audit the source", desc: "Full inventory of existing data and its quirks." },
      { title: "Map & script", desc: "Build the mapping and the migration scripts." },
      { title: "Test migration", desc: "Run it against a staging copy and validate every field." },
      { title: "Cut over", desc: "Migrate production with a rollback plan ready." },
    ],
    stack: ["SQL", "Python", "ETL Scripts", "PostgreSQL", "REST APIs"],
  },
  {
    slug: "domains-hosting",
    name: "Domains & Hosting",
    navName: "Hosting",
    icon: "globe",
    eyebrow: "Infrastructure",
    tagline: "The unglamorous part, handled correctly.",
    description:
      "Domain registration and hosting setup and configuration, including GoDaddy and Bluehost — so your site has a solid foundation before anything else gets built on top of it.",
    capabilities: [
      { title: "Domain registration", desc: "Setup and DNS configuration, including GoDaddy.", icon: "globe" },
      { title: "Hosting setup", desc: "Server configuration, including Bluehost and cloud hosting.", icon: "server" },
      { title: "SSL & security", desc: "HTTPS and baseline security configured by default.", icon: "cpu" },
      { title: "Email configuration", desc: "Business email set up correctly on your own domain.", icon: "layers" },
      { title: "Backups", desc: "Automated backups so a bad day doesn't become a bad month.", icon: "database" },
      { title: "Uptime monitoring", desc: "Know when something's down before your customers tell you.", icon: "exchange" },
    ],
    process: [
      { title: "Choose the setup", desc: "Domain registrar and hosting matched to your site's needs." },
      { title: "Configure", desc: "DNS, SSL, and server environment set up correctly." },
      { title: "Connect", desc: "Your site or app deployed to the new environment." },
      { title: "Monitor", desc: "Uptime and backups kept running in the background." },
    ],
    stack: ["GoDaddy", "Bluehost", "Cloudflare", "SSL/TLS", "DNS"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
