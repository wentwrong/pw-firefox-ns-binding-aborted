const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  reporter: 'list',
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    }
  ],
  webServer: {
    command: 'npm run start',
    port: 3000,
  }
});
