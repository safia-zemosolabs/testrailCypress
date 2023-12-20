const { defineConfig } = require("cypress");

module.exports = defineConfig({  
  reporter: "salty-cypress-testrail-reporter",
  reporterOptions: {
    domain: "safiakhanam.testrail.io",
    username: "safia.khanam@zemosolabs.com",
    password: "Hello@123",
    //ZC08hfxgEqbtzDK91kMQ-T8.CzH2SL2WusXdu5GvA
    projectId: 1,
    suiteId: 1,
    createTestRun: false,
    runId: 1,
    runName: "first attempt",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1920,
    viewportHeight: 1080,

    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
  },
});
