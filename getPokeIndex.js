//from:https://pokemon.gameinfo.io/
//outfile:POKEMON_INDEX.js
/*===========================================================================================*/
var pokemon_links = document.querySelectorAll(".gen > a");
var pokemonPromises = [];
var pokemon_info = {};

for(var i = 0 ; i < pokemon_links.length ; i++)
	pokemonPromises.push(new Promise(function(resolve,reject){
		var pokemon_url = pokemon_links[i].href;
		var xhr = new XMLHttpRequest();
		xhr.addEventListener("load",function(){
			var doc= xhr.response;
			resolve(doc);
		});
		xhr.responseType = "document";
		xhr.open('GET', pokemon_url);
		xhr.send();
		console.info("Crawling: ",pokemon_url);
	}));

Promise.all(pokemonPromises).then(function(results){
	results.map(getPokemonData);
});

function getPokemonData(doc){
	var att_pokemon = {};
	var pokemon_id = getIDFromUrl(doc.querySelector("[property]").content);
	//att_pokemon["ID"] = getIDFromUrl(doc.querySelector("[property]").content);
	att_pokemon["name"]	= doc.querySelector("h1").textContent.replace("(Pokémon)","").trim();
	//family_id
	att_pokemon["family_id"] = getFamilyID(doc, pokemon_id);
	//evolve_candy
	var obj = doc.querySelector(".evolution :not(.faded) + i");
	if(obj !== null){
		att_pokemon["evolve_candy"] = obj.getAttribute("data-candy");
		console.info(att_pokemon["evolve_candy"]);
	}
	//e.g best_moveset = [best_quick_move , best_main_move]
	var best_move_block = doc.querySelector(".desktop-view table.moveset");
	att_pokemon["best_moveset"] = Array.prototype.slice.call(best_move_block.querySelectorAll("a")).map(function(result){return getIDFromUrl(result.href);})
	att_pokemon["quick_moves"] = Array.prototype.slice.call(doc.querySelectorAll(".all-moves > .togglable > table:nth-child(1) a")).map(function(result){return getIDFromUrl(result.href);})
	att_pokemon["main_moves"] = Array.prototype.slice.call(doc.querySelectorAll(".all-moves > .togglable > table:nth-child(2) a")).map(function(result){return getIDFromUrl(result.href);})
	pokemon_info[pokemon_id] = att_pokemon;
}

function getFamilyID(doc, pokemon_id) {
	var obj = doc.querySelector(".evolution div img");
	if(obj !== null){
		return getIDFromUrl(obj.getAttribute("src"));
	}
	else{
		return pokemon_id;
	}
	
}

function getIDFromUrl (url){
	var myRe = /.*\/(\d+)-?.+/g;
	return parseInt(myRe.exec(url) [1]);
}

JSON.stringify(pokemon_info,null,'\t')