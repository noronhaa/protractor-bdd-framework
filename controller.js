app.controller("FredController", function($timeout){
	var ctrl = this;
	ctrl.myVar = "ash";
	$timeout(function(){
			ctrl.myVar = "bob";
	}, 5000);
})
