//some may call this code bad but i like to call it special
if(document.URL.includes("game_ratings")) {
	jsonName = "../../../js/games.json"
}
else if (document.URL.includes("abook_ratings")) {
	jsonName = "../../../js/amedia.json"
}
else {
	jsonName = "../../../js/wmedia.json"
}


fetch(jsonName).then(function(response){
	return response.json();
	}).then(function(results){
	var output = "";
	var temp = document.querySelector("#output");
	for (var result of results){
	if(document.URL.includes("game_ratings")) {
		outpuer = `<table id="tableRow1"> 
		<tr>
			<td>(${result.name})<br>${result.score}</td>
			<td>"${result.description}"</td>
		</tr>
		</table>`
	}
	else if(document.URL.includes("wbook_ratings")) {
		outpuer = `<table id="tableRow1"> 
		<tr>
			<td>[${result.type}]<br>(${result.name})<br>${result.score}</td>
			<td>"${result.description}"</td>
		</tr>
		</table>`
	}
	else {
		outpuer =`<table id="tableRow1"> 
			<tr>
				<td>[${result.type}]<br>(${result.name})<br>${result.score}</td>
				<td> <a href="${result.image}" target="_blank"> <img loading="lazy" class="tableimg" src="${result.image}"> </a> </td>
				<td>"${result.description}"</td>
			</tr>
		</table>`
	}
	output += outpuer};
temp.innerHTML = output});

