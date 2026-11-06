import { test, expect } from '@playwright/test';

test.describe('Navigation, Theme Toggle & Core Page Traversal', () => {
  test('navigates to Features, Architecture, Announcements, Changelog, and Community pages', async ({ page }) => {
    await page.goto('/');

    // Features
    await page.getByRole('link', { name: 'Features' }).first().click();
    await expect(page).toHaveURL(/.*\/features/);
    await expect(page.locator('h1')).toContainText(/Autonomous capabilities/i);

    // Architecture
    await page.getByRole('link', { name: 'Architecture' }).first().click();
    await expect(page).toHaveURL(/.*\/architecture/);
    await expect(page.locator('h1')).toContainText(/Modular 39-crate/i);

    // Announcements
    await page.getByRole('link', { name: 'Announcements' }).first().click();
    await expect(page).toHaveURL(/.*\/announcements/);
    await expect(page.locator('h1')).toContainText(/Announcements/i);

    // Changelog
    await page.getByRole('link', { name: 'Changelog' }).first().click();
    await expect(page).toHaveURL(/.*\/changelog/);
    await expect(page.locator('h1')).toContainText(/Changelog/i);

    // Community
    await page.getByRole('link', { name: 'Community' }).first().click();
    await expect(page).toHaveURL(/.*\/community/);
    await expect(page.locator('h1')).toContainText(/Engineered openly/i);
  });

  test('toggles dark mode theme and persists in localStorage', async ({ page }) => {
    await page.goto('/');

    const themeToggle = page.locator('button[title*="Theme"]:visible').first();
    await expect(themeToggle).toBeVisible({ timeout: 10000 });

    // Toggle theme to dark
    await themeToggle.click();
    await expect(page.locator('html')).toHaveClass(/dark/);

    // Verify persisted in localStorage
    const saved = await page.evaluate(() => localStorage.getItem('m31a-theme'));
    expect(saved).toBe('dark');

    // Toggle back to light
    await themeToggle.click();
    await expect(page.locator('html')).not.toHaveClass(/dark/);

    const savedLight = await page.evaluate(() => localStorage.getItem('m31a-theme'));
    expect(savedLight).toBe('light');
  });
});
