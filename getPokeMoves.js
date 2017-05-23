//pokemon_moves
//from:https://pokemon.gameinfo.io/en/moves
//outfile:MOVE_INDEX.js
/*===========================================================================================*/
function getAttackData(attack_array){
	var doc = attack_array[0];
	var is_main_move = attack_array[1];
	var attack_id = getIDFromUrl(doc.querySelector("[property]").content);
	var attack = {};
	//result["ID"] = getIDFromUrl(doc.querySelector("[property]").content);
	attack["name"]=doc.querySelector("h1").textContent.replace("(Move)","").trim();
	attack["is_main_move"] = is_main_move;
	attack["damage"] = doc.querySelector(".table-stats tr td:nth-child(2)").textContent;
	attack["dps"] = doc.querySelector(".table-stats tr:nth-child(2) td:nth-child(2)").textContent;
	attack["eps"] = doc.querySelector(".table-stats tr:nth-child(3) td:nth-child(2)").textContent;
	attack["damage_type"] = doc.querySelector(".large-type span").textContent;
	attack_info[attack_id] = attack;
}


function getIDFromUrl (url){
	var myRe = /.*\/(\d+)-.*/g;
	return parseInt(myRe.exec(url) [1]);
}

var quick_move_links = Array.prototype.slice.call(document.querySelectorAll("article:first-child tbody a")).map(function(link){return [link,false]});
var main_move_links = Array.prototype.slice.call(document.querySelectorAll("article:nth-child(2) tbody a")).map(function(link){return [link,true]});
var attack_links = quick_move_links.concat(main_move_links);

var attackPromises = [];
var attack_info = {};
for(var i = 0 ; i < attack_links.length ; i++)
	attackPromises.push(new Promise(function(resolve,reject){
		var attack_url = attack_links[i][0].href;
		var is_main_move = attack_links[i][1];
		var xhr = new XMLHttpRequest();
		xhr.addEventListener("load",function(){
			var doc= xhr.response;
			resolve([doc,is_main_move]);
		});
		xhr.responseType = "document";
		xhr.open('GET', attack_url);
		xhr.send();
	}));

Promise.all(attackPromises).then(function(results){
	results.map(getAttackData)
	//console.log(attack_info);
});



JSON.stringify(attack_info,null,'\t')