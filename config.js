exports.config = {
    framework:'jasmine',
    seleniumAddress:'http://localhost:4444/wd/hub',
    specs: ['spec.js','spec2.js','google.js'],
    capabilities: {
        'browserName': 'chrome',
        'shardTestFiles': false,
        'maxInstances': 2
      },
    
};