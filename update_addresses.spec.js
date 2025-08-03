import { test, expect } from '@playwright/test';

test('Edit profile and save changes', async ({ page }) => {

  // ===== LOGIN =====
  await page.goto('https://farazi.staging.dokandev.com/login');
  await page.waitForTimeout(1000);

  await page.fill("//input[@type='email']", 'mdmehedihas9n@gmail.com');
  await page.waitForTimeout(500);

  await page.fill("(//input[@type='password'])[1]", 'Test@1234');
  await page.waitForTimeout(500);

  await page.click("(//button[@type='submit'])[3]");
  await page.waitForTimeout(2000);

  // ===== GO TO ADDRESSES =====
  await page.click("//a[normalize-space()='Addresses']");
  await page.waitForTimeout(2000);

  await page.click("//button[contains(.,'Add New Address')]");
  await page.waitForTimeout(2000);

  // ===== ADD NEW ADDRESS =====
  await page.fill('[name="firstName"]', "Mehedi");
  await page.waitForTimeout(500);

  await page.fill("//input[@placeholder='Last Name']", "Hasan");
  await page.waitForTimeout(500);

  // ===== COUNTRY SELECT =====
  await page.click("//div[@class=' css-24x2qg-placeholder']/following-sibling::div[1]");
  await page.click("//div[contains(@class, 'option') and text()='Bangladesh']");
  await page.waitForTimeout(1000);

  // ===== Address =====
  await page.fill("//div[@class='w-full']//input[1]", "Mirpur 10,Dhaka");
  await page.waitForTimeout(1000);

  // If Google map suggestion container appears, click it (optional)
  try {
    await page.click("//div[@class='pac-container hdpi']//button[1]", { timeout: 2000 });
  } catch (e) {
    console.log("No suggestion popup found");
  }

  // Click "Edit Address Manually"
  await page.click("//div[normalize-space(text())='Edit Address Manually']");
  await page.waitForTimeout(1000);

  // ===== DIVISION & CITY (Critical Part) =====
  await page.fill("(//div[@class='relative w-full']//input)[3]", "Huda Place");
  await page.waitForTimeout(500);
  
  // ==== Select Division ====
  const divisionInput = page.locator("//label[contains(text(),'Division')]/following-sibling::div//input");
  await divisionInput.click();
  await divisionInput.fill("Dhaka");
  await page.waitForTimeout(1000);
  await page.click("//div[contains(@class, '-option') and text()='Dhaka']");

  // Wait until City options are available
  //await page.waitForSelector("//div[text()='Dhaka City']", { timeout: 5000 });

  // Select City
  await page.fill("//input[@placeholder='City']", "Dhaka");

  // Postal Code 
  await page.fill("//input[@placeholder='Postal Code']", "1216");

  // ===== Mobile Number =====
  await page.fill("(//label[contains(.,'Phone (Optional)')]/following::input)[1]", "01725385333");

  // ===== Home Label =====
  await page.fill("//input[@placeholder='Home']", "IqbalRoad, Shawrapara");
  await page.waitForTimeout(500);

  // ===== Default Checkbox =====
  await page.check("//div[@class='flex']//input[1]");
  await page.waitForTimeout(500);

  // ===== SAVE =====
  await page.click("(//div[contains(@class,'mt-7 flex')]//button)[2]");
  await page.waitForTimeout(2000);
});
