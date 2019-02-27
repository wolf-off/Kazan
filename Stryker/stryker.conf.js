module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["clear-text", "progress"],
    testRunner: "karma",
    testFramework: "jasmine",
    coverageAnalysis: "perTest",
    karma: {
      projectType: "custom",
      configFile: "karma.conf.js",
      config: {}
    },
    mutate: ["accumulator.js"],
    jasmineConfigFile: "spec/support/jasmine.json",
    maxConcurrentTestRunners: 1
  });
  /*
var realFs = require('fs')
var gracefulFs = require('graceful-fs')
gracefulFs.gracefulify(realFs)
  */
};
