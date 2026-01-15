import { test, expect } from '@playwright/test';

test('EPAM website navigation and verification', async ({ page }) => {
  // Step 1: Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');

  // Step 2: Select "Services" from the header menu
  // Accept cookies if prompted
  const acceptCookiesButton = page.locator('button:has-text("Accept All")');
  if (await acceptCookiesButton.isVisible()) {
    await acceptCookiesButton.click();
  }

  // Click on "Services" link
  await page.getByRole('link', { name: 'Services', exact: true }).click();

  // Step 3: Click the "Explore Our Client Work" link
  await page.getByText('Explore Our Client Work').nth(1).click();

  // Step 4: Verify that the "Client Work" text is visible on the page
  const clientWorkText = page.getByText('Client Work');
  await expect(clientWorkText).toBeVisible();
});