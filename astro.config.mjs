// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.prevail.sh",
  trailingSlash: "ignore",
  integrations: [
    starlight({
    title: "Prevail",
    description:
      "Prevail is your private AI that learns you and gets sharper every time you use it — a local-first life-OS for macOS and Windows. A native app runs a council of models per life-domain, grounded in a markdown vault you own. Free and open source.",
    tagline: "AI for your life, not your job.",
    logo: {
      src: "./src/assets/logo.svg",
      alt: "Prevail",
      replacesTitle: false,
    },
    favicon: "/favicon.ico",
    head: [
      {
        tag: "meta",
        attrs: { property: "og:image", content: "https://docs.prevail.sh/og-image.png?v=3" },
      },
      {
        tag: "meta",
        attrs: { name: "twitter:image", content: "https://docs.prevail.sh/og-image.png?v=3" },
      },
      {
        tag: "meta",
        attrs: { name: "twitter:card", content: "summary_large_image" },
      },
      {
        tag: "meta",
        attrs: { name: "theme-color", content: "#0a0a0c" },
      },
      {
        tag: "link",
        attrs: {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
      },
      {
        tag: "link",
        attrs: {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true,
        },
      },
      {
        tag: "link",
        attrs: {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=Geist+Mono:wght@400;500;600&display=swap",
        },
      },
    ],
    social: [
      {
        icon: "github",
        label: "GitHub",
        href: "https://github.com/fru-dev3/prevail-desktop",
      },
    ],
    editLink: {
      baseUrl: "https://github.com/fru-dev3/prevail-docs/edit/main/",
    },
    customCss: ["./src/styles/theme.css"],
    expressiveCode: {
      themes: ["github-dark", "github-light"],
      styleOverrides: {
        borderRadius: "0.5rem",
        codeFontFamily:
          "'Geist Mono', 'JetBrains Mono', 'SF Mono', Menlo, monospace",
      },
    },
    lastUpdated: true,
    pagination: true,
    sidebar: [
      {
        label: "Start here",
        items: [
          { label: "What is Prevail?", slug: "start/introduction" },
          { label: "Install Prevail", slug: "start/installation" },
          { label: "Quickstart", slug: "start/quickstart" },
          { label: "Core concepts", slug: "start/concepts" },
        ],
      },
      {
        label: "The desktop app",
        items: [
          { label: "Tour", slug: "desktop/overview" },
          { label: "Chat, domains & council", slug: "desktop/chat" },
          { label: "Models & providers", slug: "desktop/models" },
          { label: "Memory & self-learning", slug: "desktop/memory" },
          { label: "Demo mode & starter packs", slug: "desktop/demo" },
          { label: "The benchmark viewer", slug: "desktop/benchmarks" },
          { label: "Settings & integrations", slug: "desktop/settings" },
          { label: "Remote access (your phone)", slug: "desktop/remote" },
        ],
      },
      {
        label: "The council",
        items: [
          { label: "How the council works", slug: "council/overview" },
          { label: "Frameworks", slug: "council/frameworks" },
          { label: "Lenses", slug: "council/lenses" },
          { label: "Chair, verdicts & divergence", slug: "council/verdicts" },
        ],
      },
      {
        label: "Your vault",
        items: [
          { label: "Vault structure", slug: "vault/structure" },
          { label: "Domains", slug: "vault/domains" },
          { label: "Skills", slug: "vault/skills" },
          { label: "Logs & journal", slug: "vault/logs-journal" },
          { label: "Syncing your vault", slug: "vault/sync" },
          { label: "Privacy & local-first", slug: "engine/privacy" },
        ],
      },
      {
        label: "Integrations",
        items: [
          { label: "Connector overview", slug: "connectors/overview" },
          { label: "Using connectors", slug: "connectors/using" },
          { label: "Building a connector", slug: "connectors/building" },
          { label: "Telegram & your phone", slug: "advanced/telegram" },
          { label: "Scheduled briefings", slug: "advanced/briefings" },
          { label: "The MCP server", slug: "advanced/mcp" },
        ],
      },
      {
        label: "The CLI & engine",
        collapsed: true,
        items: [
          { label: "The CLI (the engine)", slug: "cli/overview" },
          { label: "The terminal cockpit", slug: "cli/terminal" },
          { label: "CLI command reference", slug: "reference/cli" },
          { label: "The engine --json API", slug: "engine/json-api" },
          { label: "Architecture", slug: "engine/architecture" },
          { label: "Context Score", slug: "engine/context-score" },
          { label: "The domain manifest", slug: "engine/manifest" },
          { label: "Onboarding", slug: "engine/onboarding" },
          { label: "Backup & archive", slug: "engine/backup-archive" },
          { label: "Heartbeat", slug: "engine/heartbeat" },
        ],
      },
      {
        label: "Benchmarks",
        collapsed: true,
        items: [
          { label: "The canonical benchmark", slug: "benchmarks/overview" },
          { label: "Running & scoring", slug: "benchmarks/running" },
        ],
      },
      {
        label: "Reference",
        collapsed: true,
        items: [
          { label: "Configuration", slug: "reference/configuration" },
          { label: "Security & threat model", slug: "reference/security" },
          { label: "Platform support", slug: "reference/platform" },
          { label: "Extending Prevail", slug: "reference/extending" },
        ],
      },
    ],
    }),
    mdx(),
    sitemap(),
  ],
});
