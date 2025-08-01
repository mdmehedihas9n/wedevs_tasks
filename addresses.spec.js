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
  await page.click("//a[normalize-space()='Addresses']");
  await page.waitForTimeout(2000);
  
  // Add New Address button
  await page.click("//button[contains(.,'Add New Address')]");
  await page.waitForTimeout(2000);
  
  // ===== EDIT PROFILE =====
  // First Name
  await page.click('[name="firstName"]');
  await page.type('[name="firstName"]', "Mehedi", { delay: 100 });
  await page.waitForTimeout(1000);

  // Last Name
  await page.click("//input[@placeholder='Last Name']");
  await page.type("//input[@placeholder='Last Name']", "Hasan", { delay: 100 });
  await page.waitForTimeout(1000);

  // ===== COUNTRY SELECT =====

  await page.click("//div[@class=' css-24x2qg-placeholder']/following-sibling::div[1]");
  await page.waitForTimeout(1000);

  await page.click("//div[contains(@class, 'option') and text()='Bangladesh']");
  await page.waitForTimeout(1000);

  // address
  await page.click("//div[@class='w-full']//input[1]");
  await page.type("//div[@class='w-full']//input[1]", "Mirpur 10,Dhaka", { delay: 100 });
  await page.waitForTimeout(1000);

  await page.click("//div[@class='pac-container hdpi']//button[1]");
  await page.waitForTimeout(1000);
  
  await page.click("//div[normalize-space(text())='Edit Address Manually']");
  await page.type("//div[normalize-space(text())='Edit Address Manually']", "Mirpur 10,Dhaka", { delay: 100 });
  await page.waitForTimeout(1000);


  // appertment
  //await page.click("(//label[contains(.,'Apartment (Optional)')]/following::input)[1]");
  //await page.type("(//label[contains(.,'Apartment (Optional)')]/following::input)[1]", "Huda Place", { delay: 100 });
  //await page.waitForTimeout(1000);

  
  //Division
  await page.click("//div[@class=' css-24x2qg-placeholder']/following-sibling::div[1]");
  await page.waitForTimeout(1000);

  await page.click("//div[contains(@class, 'option') and text()='Dhaka']");
  await page.waitForTimeout(1000);

  // city
// Select Division
await page.click("//div[@class=' css-24x2qg-placeholder']/following-sibling::div[1]"); // Division dropdown
await page.click("//div[text()='Dhaka']");

// Wait for City options to load
await page.waitForTimeout(1000);

// Select City
await page.click("(//div[@class=' css-1wy0on6']//div)[2]"); // City dropdown
await page.click("(//div[@class=' css-1wy0on6']//div)[2]");

  // Mobile Number
  await page.click("(//div[@class='relative w-full']//input)[3]");
  await page.type("(//div[@class='relative w-full']//input)[3]", "01712345678", { delay: 100 });
  await page.waitForTimeout(500);

    // Home address 
  await page.click("//input[@placeholder='Home']");
  await page.type("//input[@placeholder='Home']", "IqbalRoad, Shawrapara", { delay: 100 });
  await page.waitForTimeout(500);

  // checkbox
  await page.check("//div[@class='flex']//input[1]");
  await page.waitForTimeout(1000);
  
    // Save Changes
  await page.click("(//div[contains(@class,'mt-7 flex')]//button)[2]");
  await page.waitForTimeout(2000);

});

