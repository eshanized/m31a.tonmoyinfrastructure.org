<div align="center">

# 🌌 M31A Web Portal & Documentation

**Official web portal, interactive documentation, and qualification showcase for M31 Autonomous.**

[![Deploy Site](https://img.shields.io/github/actions/workflow/status/eshanized/m31a.tonmoyinfrastructure.org/deploy.yml?branch=master&label=deploy&style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/eshanized/m31a.tonmoyinfrastructure.org/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Production-m31a.tonmoyinfrastructure.org-3b82f6?style=for-the-badge&logo=googlechrome&logoColor=white)](https://m31a.tonmoyinfrastructure.org/)
[![Runtime Version](https://img.shields.io/badge/M31A%20Runtime-v0.1.1-f97316?style=for-the-badge&logo=rust&logoColor=white)](https://github.com/eshanized/M31A)
[![Next.js](https://img.shields.io/badge/Next.js-13.5-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![License](https://img.shields.io/badge/License-MIT%20%2F%20Apache--2.0-emerald?style=for-the-badge)](LICENSE)

<br/>

> *"The model proposes. The runtime decides."*

[**Explore Live Website ↗**](https://m31a.tonmoyinfrastructure.org/) • [**M31A Core Repository ↗**](https://github.com/eshanized/M31A) • [**Read Documentation ↗**](https://m31a.tonmoyinfrastructure.org/docs)

</div>

---

## 📌 Overview

This repository hosts the source code for [m31a.tonmoyinfrastructure.org](https://m31a.tonmoyinfrastructure.org/), the official web portal and documentation engine for **M31A (M31 Autonomous)**.

M31A is a single-crate, high-assurance, Rust-native autonomous software-engineering runtime. This web portal provides developers and contributors with interactive documentation, qualification matrices, terminal cockpit demonstrations, and architecture breakdowns for the autonomous runtime.

---

## ✨ Features

- 🖥️ **Interactive Cockpit Preview** — Experience the Ratatui 0.30 terminal cockpit, live tool call stream, and policy gate verdicts right in the browser.
- 📖 **19 Comprehensive Documentation Modules** — Exhaustive documentation covering the 12-stage autonomy loop, agent swarms, 40+ tool catalogs, Git worktrees, checkpoints, and TUI architecture.
- 🛡️ **Interactive Policy Gate Explorer** — Step through the 11-stage non-bypassable policy gates and Layer 0 safety vetoes.
- 📊 **Platform Qualification Matrix** — Real-time qualification status across Linux x86_64 (`SUPPORTED`), macOS (`CONDITIONALLY SUPPORTED`), and compile-only targets.
- 🔍 **Instant Documentation Search** — Client-side keyboard-driven search (`Cmd+K` / `Ctrl+K`) for rapid lookup across all articles and commands.
- ⚡ **Zero-Flicker Static Delivery** — Fully exported static Next.js App Router build deployed globally via GitHub Pages with custom domain support.

---

## 🧭 Site Navigation

| Route | Description |
|---|---|
| [`/`](https://m31a.tonmoyinfrastructure.org/) | Homepage featuring the interactive terminal cockpit, runtime architecture, and feature overview |
| [`/features`](https://m31a.tonmoyinfrastructure.org/features) | Detailed breakdown of the runtime engine, policy gates, verification system, and tool catalog |
| [`/architecture`](https://m31a.tonmoyinfrastructure.org/architecture) | System blueprint, 12-stage deterministic autonomy loop, and SQLite persistence layer |
| [`/security`](https://m31a.tonmoyinfrastructure.org/security) | Non-bypassable policy gates, 10 authority layers, and cryptographic SHA-256 evidence digests |
| [`/docs`](https://m31a.tonmoyinfrastructure.org/docs) | Complete technical documentation covering installation, configuration, tools, and CLI reference |
| [`/cli`](https://m31a.tonmoyinfrastructure.org/cli) | Reference guide for all 18 CLI subcommands and options |
| [`/download`](https://m31a.tonmoyinfrastructure.org/download) | Binary releases, install scripts, and verification instructions |
| [`/roadmap`](https://m31a.tonmoyinfrastructure.org/roadmap) | Release milestones, development status, and upcoming capabilities |
| [`/changelog`](https://m31a.tonmoyinfrastructure.org/changelog) | Release notes for v0.1.1 and version history |
| [`/community`](https://m31a.tonmoyinfrastructure.org/community) | Contributing guide, community channels, and open-source governance |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 13.5](https://nextjs.org/) (App Router, Static HTML Export)
- **Language**: [TypeScript 5.2](https://www.typescriptlang.org/) (Strict typing, noImplicitAny)
- **Styling**: [Tailwind CSS 3.3](https://tailwindcss.com/) with custom dark neon terminal palette
- **Component Primitives**: [Radix UI](https://www.radix-ui.com/) accessible primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts & Visualization**: [Recharts](https://recharts.org/)
- **Deployment**: [GitHub Pages](https://pages.github.com/) via automated GitHub Actions

---

## 📂 Repository Structure

```
.
├── app/                        # Next.js App Router pages
│   ├── about/                  # About M31A & Tonmoy Infrastructure
│   ├── architecture/           # Interactive system architecture explorer
│   ├── changelog/              # Release logs & updates
│   ├── cli/                    # CLI command reference
│   ├── community/              # Community & governance
│   ├── docs/                   # Dynamic documentation routes & article views
│   ├── download/               # Installation & pre-built binary links
│   ├── features/               # Detailed product capabilities
│   ├── roadmap/                # Project roadmap & milestones
│   ├── security/               # Security model & policy pipeline
│   ├── layout.tsx              # Root HTML layout with navigation & footer
│   ├── page.tsx                # Landing page
│   ├── robots.ts               # Robots.txt generator
│   └── sitemap.ts              # Dynamic sitemap with all doc slugs
├── components/                 # Reusable UI & layout components
│   ├── cockpit/                # Interactive cockpit & simulated terminal
│   ├── docs/                   # Documentation sidebar, TOC, and search
│   ├── security/               # Policy gate & security visualizations
│   ├── site/                   # Header, footer, section headers, logo
│   └── ui/                     # Radix UI primitives (dialog, dropdown, etc.)
├── hooks/                      # Custom React hooks (theme, copy-to-clipboard)
├── lib/                        # Authoritative product data & helpers
│   ├── docs/                   # Documentation article content & manifest
│   └── m31a/                   # Product metadata, navigation, qualification
├── public/                     # Static assets & GitHub Pages CNAME
│   └── CNAME                   # Custom domain declaration (m31a.tonmoyinfrastructure.org)
├── scripts/                    # Integrity & validation scripts
│   └── validate-content.mjs    # Content & route invariant validator
└── .github/
    └── workflows/
        └── deploy.yml          # GitHub Pages automated build & deployment workflow
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) `>= 20.0.0` (v22 LTS recommended)
- `npm` `>= 10.0.0`

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/eshanized/m31a.tonmoyinfrastructure.org.git
cd m31a.tonmoyinfrastructure.org
npm install
```

### Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Content Validation & Audit

Run the automated integrity validation script to check routes, product invariants, qualification targets, and documentation topics:

```bash
npm run content:validate
```

### Static Build & Export

Produce an optimized static production export in `./out`:

```bash
npm run build
```

---

## 🔄 CI/CD & Deployment

Every push to the `master` branch triggers the GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. **Dependency Resolution**: Installs dependencies with lockfile validation.
2. **Invariant Testing**: Runs `npm run content:validate` to ensure zero broken routes or invariants.
3. **Static Export**: Runs `next build` (with `output: 'export'`) to generate static assets in `./out`.
4. **Pages Packaging**: Injects `.nojekyll` and custom domain `CNAME` into the build artifact.
5. **Edge Deployment**: Deploys via `actions/deploy-pages` to [m31a.tonmoyinfrastructure.org](https://m31a.tonmoyinfrastructure.org/).

---

## 🤝 Contributing

We welcome contributions to the documentation, guides, design, and UI components!

1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/amazing-feature`).
3. Commit your changes (`git commit -m 'feat: add amazing feature'`).
4. Validate changes: `npm run content:validate && npm run build`.
5. Push to your branch (`git push origin feat/amazing-feature`).
6. Open a Pull Request.

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 📜 License

This website and documentation are dual-licensed under the **MIT License** and the **Apache License 2.0**. See [LICENSE](LICENSE) for details.

---

<div align="center">
  <sub>Maintained by <strong>Tonmoy Infrastructure & Vision</strong>. Powered by Next.js & GitHub Pages.</sub>
</div>
