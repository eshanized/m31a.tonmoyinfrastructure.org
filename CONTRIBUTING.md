# Contributing to M31A Web Portal

Thank you for your interest in contributing to the official M31A website and documentation!

## Development Workflow

1. **Fork and Clone**
   ```bash
   git clone https://github.com/eshanized/m31a.tonmoyinfrastructure.org.git
   cd m31a.tonmoyinfrastructure.org
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Local Server**
   ```bash
   npm run dev
   ```

4. **Verify Invariants & Types**
   Before submitting any pull request, ensure all validation checks and builds pass without errors:
   ```bash
   npm run typecheck
   npm run content:validate
   npm run build
   ```

## Contribution Guidelines

- **Documentation & Content**:
  - Keep documentation articles accurate with the M31A Rust runtime specifications.
  - New documentation articles must be registered in both `lib/m31a/product.ts` (`DOCS` catalog) and `lib/docs/content.tsx`.
- **UI Components**:
  - Use Tailwind CSS and ensure responsive behavior across mobile, tablet, and desktop viewports.
  - Follow the dark neon / high-contrast terminal styling guidelines.
- **Commit Messages**:
  - Use conventional commits format: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `style:`.

## License

By contributing, you agree that your contributions will be licensed under the MIT and Apache-2.0 licenses.
