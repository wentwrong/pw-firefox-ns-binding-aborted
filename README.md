# Minimal reproducible example for the "NS_BINDING_ABORTED" error

Run the following
```bash
npm ci
npm test
```

And you will get
```
  1) [firefox] › bug.spec.js:3:1 › goto should not fail with the "NS_BINDING_ABORTED" error ========

    page.goto: NS_BINDING_ABORTED; maybe frame was detached?
    =========================== logs ===========================
    navigating to "http://localhost:3000/b", waiting until "load"
    ============================================================

      3 | test('goto should not fail with the "NS_BINDING_ABORTED" error', async ({ page }) => {
      4 |     await page.goto('http://localhost:3000/a');
    > 5 |     await page.goto('http://localhost:3000/b');
        |                ^
      6 | });
      7 |
```
