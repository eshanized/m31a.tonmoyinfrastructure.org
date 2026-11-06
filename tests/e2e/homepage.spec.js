import { test, expect } from '@playwright/test';

test.describe('M31A Homepage & Interactive Elements', () => {
  test('loads homepage with correct title, metadata and hero headline', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/M31A — Autonomous Engineering Beyond Assistance/i);

    // Hero headline and subheadline
    const heading = page.locator('h1');
    await expect(heading).toContainText(/Engineering beyond assistance/i);

    // Primary CTA
    const getStartedBtn = page.getByRole('link', { name: /get started/i }).first();
    await expect(getStartedBtn).toBeVisible();
    await expect(getStartedBtn).toHaveAttribute('href', '/features');
  });

  test('switches demonstration tabs in hero terminal demo', async ({ page }) => {
    await page.goto('/');

    // Click Vibe Coding Loop tab
    const vibeTab = page.getByRole('button', { name: /vibe coding loop/i });
    await expect(vibeTab).toBeVisible();
    await vibeTab.scrollIntoViewIfNeeded();
    await vibeTab.click();
    await expect(page.locator('text=Continuous Vibe Watcher Active')).toBeVisible();

    // Click Speculative Arena tab
    const specTab = page.getByRole('button', { name: /speculative arena/i });
    await specTab.scrollIntoViewIfNeeded();
    await specTab.click();
    await expect(page.locator('text=Branch A: SIMD-JSON')).toBeVisible();

    // Click Captured TUI tab
    const tuiTab = page.getByRole('button', { name: /captured tui/i });
    await tuiTab.scrollIntoViewIfNeeded();
    await tuiTab.click();
    await expect(page.locator('img[alt*="Terminal User Interface"]')).toBeVisible();
  });

  test('interacts with the Autonomous Engineering workflow nodes', async ({ page }) => {
    await page.goto('/');

    // Step 01 default
    await expect(page.locator('text=Phase 01')).toBeVisible();

    // Click Step 03 Planning
    const planBtn = page.getByRole('button', { name: /03 Planning/i });
    await planBtn.scrollIntoViewIfNeeded();
    await planBtn.click();
    await expect(page.locator('text=Phase 03')).toBeVisible();
  });

  test('interacts with Security Defense-in-Depth layers', async ({ page }) => {
    await page.goto('/');

    const bwrapBtn = page.getByRole('button', { name: /Bubblewrap Linux Sandbox/i });
    await bwrapBtn.scrollIntoViewIfNeeded();
    await bwrapBtn.click();
    await expect(page.locator('text=Unprivileged Namespaces').first()).toBeVisible();
  });
});
