//name_list
//https://pokemon.gameinfo.io
//outfile:NAME_INDEX.js
/*===========================================================================================*/
var get_name_promise = [];
get_name_promise.push(getPokemonNameList("https://pokemon.gameinfo.io"));
get_name_promise.push(getAttackNameList("https://pokemon.gameinfo.io/en/moves"));
get_name_promise.push(getPokemonNameList("https://pokemon.gameinfo.io/ja"));
get_name_promise.push(getAttackNameList("https://pokemon.gameinfo.io/ja/moves"));
var name_list = [];

Promise.all(get_name_promise).then(function(results){
	console.log("promise: ",get_name_promise.length);
	results.map(function(result){
		Array.prototype.slice.call(result).map(function(tag){
			var name = tag.text;
			if (name === undefined){
				name_list.push(tag.innerHTML);
			}
			else {
				name_list.push(name.trim());
			}

		});
	});
});

function getPokemonNameList(url){
	return(	new Promise(function(resolve,reject){
			var xhr = new XMLHttpRequest();
			xhr.addEventListener("load",function(){
				var doc= xhr.response;
				resolve(doc.querySelectorAll("h2"));
			});
			xhr.responseType = "document";
			xhr.open('GET', url);
			xhr.send();
		}));
}

function getAttackNameList(url){
	return(	new Promise(function(resolve,reject){
			var xhr = new XMLHttpRequest();
			xhr.addEventListener("load",function(){
				var doc= xhr.response;
				resolve(doc.querySelectorAll("td > a"));
			});
			xhr.responseType = "document";
			xhr.open('GET', url);
			xhr.send();
	}));
}

var name_maps = {};
var gap = name_list.length/2;
for(var i = 0 ; i < gap ; i++){
	var name_map = {};
	name_map["jp"] = name_list[i+gap];
	name_maps[name_list[i]] = name_map
}