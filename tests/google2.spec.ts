import { test } from '@playwright/test'
import { GooglePage } from '../pages/GooglePage';
import { LoginPage } from '../pages/LoginPage';

test('buscar algo en Google', async({ browser, page }) => {


  
    const context = await browser.newContext(); // nueva sesión
    const page1 = await context.newPage();      // pestaña 1
    const page1full = new GooglePage(page1);
    const page2 = await context.newPage();      // pestaña 2
    const page2full = new GooglePage(page2);

    await page2.goto('https://www.amazon.com');
    await page1.goto('https://www.google.com');
    await page1full.navegar();
    await page1full.buscar('te amo, gracias');
    

});