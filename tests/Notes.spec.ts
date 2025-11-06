import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log('📄 beforeEach: navegando a Google...');
  await page.goto('https://google.com');
});

test.afterEach(async () => {
  console.log('🧹 afterEach: test finalizado.');
});

test('Buscar Playwright en Google', async ({ page }) => {
  const searchBox = page.locator('textarea[name="q"]');
  await searchBox.fill('Playwright');
  await searchBox.press('Enter');
  await expect(page).toHaveTitle(/Playwright/);
});

test('Buscar JavaScript en Google', async ({ page }) => {
  const searchBox = page.locator('textarea[name="q"]');
  await searchBox.fill('JavaScript');
  await searchBox.press('Enter');
  await expect(page).toHaveTitle(/JavaScript/);
});
