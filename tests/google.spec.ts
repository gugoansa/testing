import { test } from '@playwright/test'
import { GooglePage } from '../pages/GooglePage'


test('buscar algo en Google', async({ page }) => {
    const google = new GooglePage(page);
    await google.navegar();
    await google.buscar('Playwright');

});