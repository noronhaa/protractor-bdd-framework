
var AngularHomePage = require('./Pages/HomePage')
var APIdocPage = require('./Pages/AngularAPIDocsPageObject')

var myStepDefinitionsWrapper = function () {

    var homePage = new AngularHomePage();
    var apiDocsPage = new APIdocPage();

    this.Given(/^the user has navigated to the homepage url$/, function (callback) {
        browser.get('https://angularjs.org/');
    });

    this.Then(/^the user will be on the homepage$/, function (callback) {
        expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
    });
};
module.exports = myStepDefinitionsWrapper;