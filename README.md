# M31A Official Website

Official website and product showcase for **M31A** (`https://m31a.tonmoyinfrastructure.org`), the open-source sovereign autonomous agentic coding system built in Rust 2024 and powered by NVIDIA NIM frontier intelligence.

---

## Technical Stack & Constraints

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Typography**: Google Font **Dosis** globally with **JetBrains Mono** for terminal/code blocks
- **Language**: **Pure JavaScript (ESM)** — *Strictly no TypeScript per architecture guidelines*
- **Directory Structure**: Root-level App Router (`app/`, `components/`, `lib/`, `styles/`, `tests/`) — *No `src/` directory*
- **Theme**: Complete **Dark Mode** & **Light Mode** support with anti-FOUC script, system preference synchronization, and localStorage persistence
- **Styling**: Tailwind CSS 3.4 with custom Antigravity-inspired design tokens
- **Motion & Graphics**: Browser-native Canvas particle field with dark/light dynamic adaptation and reduced-motion support
- **Documentation**: Externalized to Docusaurus (in-repo /docs routes redirect cleanly to GitHub docs repository until Docusaurus deployment)
- **Testing**:
  - Unit & Integration: Vitest 5 + Testing Library (React 19 + JSDOM) — 18 tests passing
  - End-to-End: Playwright 1.64 (Multi-viewport regression across Chromium and Mobile Chromium) — 58 tests passing
- **Package Manager**: `pnpm` 12

---

## Design System

The visual design is inspired by the **Google Antigravity** visual family (`https://antigravity.google/`):
- Restrained, minimal light palette with deep, high-contrast dark theme
- Global typography driven by Google Font **Dosis** for crisp, modern editorial headings and UI text
- Large centered hero typographic composition: *"Engineering beyond assistance"*
- Custom HTML5 Canvas particle-field animation simulating organic elliptical gravitational fields that dynamically illuminate in dark mode
- Pill-shaped action controls (`rounded-full`) and rounded cards (`rounded-[18px]`, `rounded-[28px]`)
- Interactive, faithful terminal demonstrations showing real Ratatui TUI workflows, Codex patches, and continuous vibe auto-repairs
- Sleek `ThemeToggle` control supporting instant light/dark switching and system preference synchronization

---

## Directory Architecture

```text
.
├── app/                              # Next.js App Router routes
│   ├── layout.jsx                    # Root layout with Dosis font, metadata, and anti-FOUC script
│   ├── page.jsx                      # Homepage with 12 complete sections
│   ├── not-found.jsx                 # Custom 404 error page
│   ├── sitemap.js                    # Dynamic XML sitemap generator
│   ├── robots.js                     # Production robots.txt generator
│   ├── features/page.jsx             # Dedicated product features deep-dive
│   ├── architecture/page.jsx         # 39-crate topology & execution pipelines
│   ├── announcements/page.jsx        # Dedicated announcements & dispatches hub
│   ├── changelog/page.jsx            # Dynamic releases fetched live from GitHub
│   └── community/page.jsx            # Open source governance & contribution hub
│
├── announcements.json                # Structured announcements data file
│
├── components/                       # Modular UI and presentation components
│   ├── ui/                           # Button, Badge, Card, Container, Section, ThemeToggle, CodeBlock, Icons
│   ├── navigation/                   # Sticky glass Navbar, MobileNav, Dropdown
│   ├── hero/                         # HeroSection, ParticleField canvas, HeroDemonstration, QuickInstallPill
│   ├── sections/                     # Homepage narrative sections (Introduction, Surfaces, Workflow, Security, etc.)
│   ├── demonstrations/               # AgentWorkflow, SecurityArchitecture, Speculative
│   └── footer/                       # Comprehensive multi-column footer
│
├── lib/                              # Data layers and API clients
│   ├── site-config.js                # Authoritative metadata, navigation and URLs
│   └── github.js                     # GitHub API client with server caching & fallbacks
│
├── public/                           # Static assets
│   ├── favicon.svg                   # Brand favicon
│   ├── brand/m31a-logo.svg           # High-resolution vector logo
│   └── images/m31a-tui-preview.png   # Genuine Ratatui TUI captured preview
│
├── styles/
│   └── globals.css                   # Tailwind layers, CSS variables, and design tokens (Light & Dark)
│
├── tests/                            # Test suites
│   ├── setup.js                      # Vitest JSDOM environment mocks
│   ├── unit/                         # Unit tests (github, theme, components)
│   ├── integration/                  # Integration tests (navigation, demonstrations)
│   └── e2e/                          # Playwright end-to-end tests (homepage, navigation, routes, visual-qa)
│
├── eslint.config.mjs                 # Flat ESLint configuration
├── jsconfig.json                     # Path aliases (@/* -> ./*)
├── next.config.mjs                   # Security headers, CSP, /docs redirects, and image patterns
├── package.json                      # Scripts and dependencies
├── playwright.config.mjs             # Playwright configuration
├── postcss.config.mjs                # PostCSS plugins
├── tailwind.config.mjs               # Tailwind design tokens with darkMode: 'class'
└── vitest.config.mjs                 # Vitest test configuration
```

---

## Prerequisites

- **Node.js**: v20+ (v26.13 tested)
- **Package Manager**: `pnpm` v12 (`pnpm -v`)

---

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/eshanized/M31A.git
   cd M31A
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Run the local development server**:
   ```bash
   pnpm dev
   ```
   Open `http://localhost:3000` in your browser.

---

## Testing & Quality Assurance

### Run Unit & Integration Tests (Vitest)
```bash
pnpm test
```
Executes 18 comprehensive unit and integration tests verifying:
- Site configuration & metadata contracts
- Theme toggle functionality (Light, Dark, and System modes)
- Interactive tabs and foldables
- GitHub API client with 1-hour in-memory cache and fallbacks
- UI primitives (Buttons, Badges, Cards, CodeBlock copy actions)

### Run Playwright E2E Tests
```bash
pnpm test:e2e
```
Runs 58 automated browser tests covering:
- Dark mode toggling and localStorage persistence
- Viewport responsiveness across 5 screen sizes (1440px, 1280px, 768px, 390px, 320px)
- Zero horizontal layout overflow checks
- Interactive terminal demonstrations & speculative arena
- Workflow phase stepper navigation
- Defense-in-depth security layer selection
- Full route coverage (200 status on all pages)
- Automatic HTTP 307/308 redirect from `/docs` to the official documentation repository

### Run Linting
```bash
pnpm lint
```
Strict zero-warning ESLint validation across all JavaScript and JSX source files.

### Build Production Bundle
```bash
pnpm build
pnpm start
```
Compiles optimized static and server-rendered assets with zero TypeScript overhead.

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
