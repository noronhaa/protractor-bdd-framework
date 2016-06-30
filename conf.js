exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    specs: ['firsttest.spec.js'],
    
    jasmineNodeOpts: {
		defaultTimeoutInterval: 2500000
	}

    // set to "custom" instead of cucumber.
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework')
};



