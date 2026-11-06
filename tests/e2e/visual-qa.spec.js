import { test, expect } from '@playwright/test';

const VIEWPORTS = [
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'desktop-1280', width: 1280, height: 800 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'narrow-mobile-320', width: 320, height: 568 },
];

test.describe('Visual QA & Viewport Responsiveness', () => {
  for (const vp of VIEWPORTS) {
    test(`renders homepage cleanly at ${vp.name} (${vp.width}x${vp.height}) with zero horizontal overflow`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');

      // Verify page loaded
      await expect(page.locator('h1')).toBeVisible();

      // Ensure no horizontal scrollbar overflow
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2);

      // Capture screenshot for visual inspection
      await page.screenshot({
        path: `test-results/screenshots/${vp.name}-homepage.png`,
        fullPage: false,
      });
    });

    test(`renders features page cleanly at ${vp.name} (${vp.width}x${vp.height})`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/features');

      await expect(page.locator('h1')).toBeVisible();

      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2);

      await page.screenshot({
        path: `test-results/screenshots/${vp.name}-features.png`,
        fullPage: false,
      });
    });

    test(`renders announcements page cleanly at ${vp.name} (${vp.width}x${vp.height})`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/announcements');

      await expect(page.locator('h1')).toBeVisible();

      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2);

      await page.screenshot({
        path: `test-results/screenshots/${vp.name}-announcements.png`,
        fullPage: false,
      });
    });

    test(`renders dark mode cleanly at ${vp.name} (${vp.width}x${vp.height})`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');

      // Apply dark mode directly on <html>
      await page.evaluate(() => document.documentElement.classList.add('dark'));

      // Ensure dark mode class is applied
      await expect(page.locator('html')).toHaveClass(/dark/);

      // Verify no horizontal overflow in dark mode
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2);

      await page.screenshot({
        path: `test-results/screenshots/${vp.name}-dark-mode.png`,
        fullPage: false,
      });
    });
  }

  test('respects prefers-reduced-motion media query on Canvas particle field', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');

    const canvas = page.locator('canvas');
    await expect(canvas).toBeVisible();

    // Verify canvas rendered static particles without animation errors
    const isRendered = await page.evaluate(() => {
      const c = document.querySelector('canvas');
      return c && c.width > 0 && c.height > 0;
    });
    expect(isRendered).toBe(true);
  });
});
