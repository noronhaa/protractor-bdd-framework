var AngularAPIDocsPage = function(){

	this.pageTitle = element(by.id('angularjs-api-docs'));

	this.getPageTitleText = function(){
		return this.pageTitle.getText();
	}

};

module.exports = AngularAPIDocsPage;