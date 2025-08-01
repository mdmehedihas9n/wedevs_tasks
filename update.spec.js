import { test, expect } from '@playwright/test';

test('Edit profile and save changes', async ({ page }) => {

  // ===== LOGIN =====
  await page.goto('https://farazi.staging.dokandev.com/login');
  await page.waitForTimeout(1000);

  // Email
  await page.fill("//input[@type='email']", 'mdmehedihas9n@gmail.com');
  await page.waitForTimeout(500);

  // Password
  await page.fill("(//input[@type='password'])[1]", 'Test@1234');
  await page.waitForTimeout(500);

  // Login button
  await page.click("(//button[@type='submit'])[3]");
  await page.waitForTimeout(2000);

  // ===== GO TO ACCOUNT DETAILS =====

  await page.click("//a[normalize-space()='Account Details']");
  await page.waitForTimeout(2000);

  // ===== EDIT PROFILE =====
// Fill First Name
  await page.click('[name="firstName"]');
  await page.type('[name="firstName"]', "Hasan", { delay: 100 });
  await page.waitForTimeout(1000);

  // Fill Last Name
  await page.click('[name="lastName"]');
  await page.type('[name="lastName"]', "009", { delay: 100 });
  await page.waitForTimeout(1000);

// Mobile Number
  await page.click("//input[@placeholder='Mobile']");
  await page.type("//input[@placeholder='Mobile']", "01712345678", { delay: 100 });
  await page.waitForTimeout(500);

  // Select Male gender
  await page.click("//div[normalize-space(text())='Male']");
  await page.waitForTimeout(500);

  // Save Changes
  await page.click("//button[contains(text(),'Save Changes')]");
  await page.waitForTimeout(2000);
  
});
