//some may call this code bad but i like to call it special
if (document.URL.includes("gamereviews")) {
    jsonName = "../../../js/games.json"
	fetch(jsonName).then(function(response){
		return response.json();
		}).then(function(results){
		var output = "";
		var temp = document.querySelector("#output");
		for (var result of results){
		output += `<table id="tableRow1"> 
			<tr>
				<td>(${result.name})<br>${result.score}</td>
				<td>"${result.description}"</td>
			</tr>
		</table>`};
	temp.innerHTML = output});
}
else if(document.URL.includes("bookreviews")) {
	jsonName = "../../../js/media.json"
	fetch(jsonName).then(function(response){
		return response.json();
		}).then(function(results){
		var output = "";
		var temp = document.querySelector("#output");
		for (var result of results){
		output += `<table id="tableRow1"> 
			<tr>
				<td>[${result.type}]<br>(${result.name})<br>${result.score}</td>
				<td> <a href="${result.image}" target="_blank"> <img class="tableimg" src="${result.image}"> </a> </td>
				<td>"${result.description}"</td>
			</tr>
		</table>`};
	temp.innerHTML = output});
}

