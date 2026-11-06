import { test, expect } from '@playwright/test';

const ROUTES = [
  { path: '/', titleExpected: /M31A/i },
  { path: '/features', titleExpected: /Features/i },
  { path: '/architecture', titleExpected: /Architecture/i },
  { path: '/announcements', titleExpected: /Announcements/i },
  { path: '/changelog', titleExpected: /Changelog/i },
  { path: '/community', titleExpected: /Community/i },
];

test.describe('Complete Route Coverage & 200 Status Verification', () => {
  for (const route of ROUTES) {
    test(`loads ${route.path} with status 200 and valid content`, async ({ page }) => {
      const response = await page.goto(route.path);
      expect(response?.status()).toBe(200);
      await expect(page).toHaveTitle(route.titleExpected);

      // Verify no horizontal overflow
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2); // allowance for fractional pixels
    });
  }

  test('redirects /docs to external GitHub docs repository', async ({ page }) => {
    // Inspect HTTP redirect response directly without waiting for external network navigation
    const response = await page.request.get('/docs', { maxRedirects: 0 });
    expect([307, 308, 301, 302]).toContain(response.status());
    expect(response.headers()['location']).toBe('https://github.com/eshanized/M31A/tree/main/docs');
  });
});
