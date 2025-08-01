import { test, expect } from '@playwright/test';

test('Sign up test using Stable XPath with Delay', async ({ page }) => {

  // Go to Home page
  await page.goto('http://farazi.staging.dokandev.com/');
  await page.waitForTimeout(1000);

  // Click Sign Up button
  await page.click("(//a[text()='Login']/following-sibling::a)[2]");
  await page.waitForTimeout(1000);

  // Fill First Name
  await page.click("(//input[@type='text'])[1]");
  await page.type("(//input[@type='text'])[1]", 'Mehedi', { delay: 100 });
  await page.waitForTimeout(1000);

  // Fill Last Name
  await page.click("(//input[@type='text'])[2]");
  await page.type("(//input[@type='text'])[2]", 'Hasan', { delay: 100 });
  await page.waitForTimeout(1000);

  // Fill Email
  await page.click("//input[@type='email']");
  await page.type("//input[@type='email']", 'mehedi@gmail.com', { delay: 100 });
  await page.waitForTimeout(1000);

  // Fill Password
  await page.click("(//input[@type='password'])[1]");
  await page.type("(//input[@type='password'])[1]", 'Test@1234', { delay: 100 });
  await page.waitForTimeout(1000);

  // Fill Confirm Password
  await page.click("(//input[@type='password'])[2]");
  await page.type("(//input[@type='password'])[2]", 'Test@1234', { delay: 100 });
  await page.waitForTimeout(1000);

  // Check "Keep me aligned with updates"
  await page.check("//input[@type='checkbox']");
  await page.waitForTimeout(1000);

  // Click Create Account button
  await page.click("//button[contains(text(),'Create Account')]");
  await page.waitForTimeout(2000);

  // Optional - Verify success message
  // await expect(page.locator("//div[contains(text(),'Account created')]")).toBeVisible();
});
