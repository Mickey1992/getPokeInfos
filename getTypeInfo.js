//type_info
//from:http://pokemondb.net/type
//outfile:TYPE_INDEX.js
/*===========================================================================================*/
function getTypeData(doc){
	var att_type = {};
	var title = doc.querySelector("h1").textContent;
	var type_name = title.substring(0,title.length-7);
	//att_pokemon["ID"] = getIDFromUrl(doc.querySelector("[property]").content);
	//att_pokemon["name"]=doc.querySelector("h1").textContent;
	//e.g best_moveset = [best_quick_move , best_main_move]
	var discriptions = Array.prototype.slice.call(doc.querySelectorAll("span.icon-string")).map(function(element){return element.textContent});
	var relations = doc.querySelectorAll("p.type-fx-list");
	var strong_weak = getStrongWeak(discriptions,relations);
	att_type["strong"] = strong_weak[0];
	att_type["weak"] = strong_weak[1];
	type_info[type_name] = att_type;
}

function getStrongWeak(heads,divs){
	var strong = [];
	var weak = [];
	for(i = 0;i<heads.length;i++){
		if(heads[i].search("moves") != -1) {
			var row = Array.prototype.slice.call(divs[i].querySelectorAll("a")).map(function(element){return element.textContent});
			//strong
			if((heads[i].search("not") == -1) && (heads[i].search("no") == -1)){
				strong = strong.concat(row);
			}
			//weak
			else{
				weak = weak.concat(row);
			}
		}
	}
	return [strong,weak];
}


function getIDFromUrl (url){
	var myRe = /.*\/(\d+)-.+/g;
	return parseInt(myRe.exec(url) [1]);
}


var type_links = document.querySelectorAll(".type-icon");
var typePromises = [];
var type_info = {};

for(var i = 0 ; i < type_links.length ; i++)
	typePromises.push(new Promise(function(resolve,reject){
		var type_url = type_links[i].href;
		var xhr = new XMLHttpRequest();
		xhr.addEventListener("load",function(){
			var doc= xhr.response;
			resolve(doc);
		});
		xhr.responseType = "document";
		xhr.open('GET', type_url);
		xhr.send();
	}));

Promise.all(typePromises).then(function(results){
	results.map(getTypeData);
});



JSON.stringify(pokemon_info,null,'\t')