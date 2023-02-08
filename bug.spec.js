const { test } = require('@playwright/test');

test('goto should not fail with the "NS_BINDING_ABORTED" error', async ({ page }) => {
    await page.goto('http://localhost:3000/a');
    await page.goto('http://localhost:3000/b');
});
