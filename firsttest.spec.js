
  var AngularHomePage = require('./Pages/HomePage')
  var APIdocPage = require('./Pages/AngularAPIDocsPageObject')

describe('Angular website automation functionality',function(){
  
  var homePage = new AngularHomePage();
  var apiDocsPage = new APIdocPage();

  beforeEach(function() {
      browser.get('https://angularjs.org/');
  });

  it('should show the correct title on the home page', function() {
    expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');

  })

  it('should display my name when I enter it into the name text box', function(){
    homePage.enterIntoSearchBox('Ashley')
    expect(homePage.getOutput()).toEqual('Hello Ashley!')
  })

  it('should be navigate to the API Reference page through the menu', function(){
    homePage.navigateToAPIdocsPageThroughMenu();
    expect(apiDocsPage.getPageTitleText()).toEqual('AngularJS API Docs');


  })



})





// describe('angularjs homepage todo list', function() {
//   it('should find the title', function() {
//     browser.get('http://localhost:8080');

//     expect(browser.getTitle()).toEqual('Ashley first node lesson');


//     // element(by.model('todoList.todoText')).sendKeys('write first protractor test');
//     // element(by.css('[value="add"]')).click();

//     // var todoList = element.all(by.repeater('todo in todoList.todos'));
//     // expect(todoList.count()).toEqual(3);
//     // expect(todoList.get(2).getText()).toEqual('write first protractor test');

//     // // You wrote your first test, cross it off the list
//     // todoList.get(2).element(by.css('input')).click();
//     // var completedAmount = element.all(by.css('.done-true'));
//     // expect(completedAmount.count()).toEqual(2);
//   });




//   it('should have the text bob',function() {
//     browser.get('http://localhost:8080');

//     var nameText = element(by.css('#nametext')).getText();
//     expect(nameText).toEqual('bob');

//   });

// });
