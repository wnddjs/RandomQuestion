// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.


$( document ).ready(function() {
	var history = [];
	var history_check =[];
	var lock_keydown = 0;
	var n = 0;

	function make_random_country(){
	  var country_capital_pairs = pairs;
	  var num_random = Math.floor(Math.random() * country_capital_pairs.length);
	  var QId = document.getElementById("pr2__question");
	  random_dic = country_capital_pairs[num_random];
	  QId.innerHTML = random_dic["question"];
	}

	make_random_country();

});





