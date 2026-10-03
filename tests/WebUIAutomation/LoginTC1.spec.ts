import  test from '@playwright/test';

test("Login TC1" ,async({page})=>{

    await page.goto("https://www.demoblaze.com/");
    await page.getByRole('link',{name: 'Log in'}).click();
    await page.locator("#loginusername").fill("kamini1234");
    await page.locator("#loginpassword").fill("kamini");
    await page.getByRole('button',{name: 'Log in'}).click();



})
