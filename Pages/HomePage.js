'use strict';

var AngularHomePage = function(){

	this.textField =  element(by.css('body .row.example:nth-of-type(1) .span4 input'))
	this.output = element(by.css('body .row.example:nth-of-type(1) .span4 h1'))
	this.developMenuButton = element(by.css('.navbar-inner .dropdown:nth-of-type(6)'))
	this.developMenuAPISubMenuButton = element(by.css('.navbar-inner .dropdown:nth-of-type(6) li:nth-of-type(3)'))
	
	this.navigateToAPIdocsPageThroughMenu = function(){
		this.developMenuButton.click();
    	this.developMenuButton.click();
	}
	
	this.enterIntoSearchBox = function(input){
		this.textField.sendKeys(input);
	}

	this.getOutput = function(){
		return this.output.getText();
	}
};

module.exports = AngularHomePage;