//some may call this code bad but i like to call it special
if (document.URL.includes("game_ratings")) {
	jsonName = "https://raw.githubusercontent.com/Moosyu/jsonStorage/main/games.json"
} else if (document.URL.includes("abook_ratings")) {
	jsonName = "https://raw.githubusercontent.com/Moosyu/jsonStorage/main/amedia.json"
} else {
	jsonName = "https://raw.githubusercontent.com/Moosyu/jsonStorage/main/wmedia.json"
}


fetch(jsonName).then(function (response) {
	return response.json();
}).then(function (results) {
	var output = "";
	var temp = document.querySelector("#output");
	for (var result of results) {
		if (document.URL.includes("game_ratings")) {
			outputer = `<table> 
		<tr">
			<td>(${result.name})<br>${result.score}</td>
			<td>"${result.description}"</td>
		</tr>
		</table>`
		} else if (document.URL.includes("wbook_ratings")) {
			outputer = `<table> 
		<tr>
			<td>[${result.type}]<br>(${result.name})<br>${result.score}</td>
			<td>"${result.description}"</td>
		</tr>
		</table>`
		} else {
			outputer = `<table> 
			<tr>
				<td>[${result.type}]<br>(${result.name})<br>${result.score}</td>
				<td> <a href="${result.image}" target="_blank"> <img loading="lazy" class="tableimg" src="${result.image}"> </a> </td> <!-- the href ="${result.image} redirects to this page if it has no image. idk how to fix this and i dont really want to right now ill do it later i swear. -->
				<td>"${result.description}"</td>
			</tr>
		</table>`
		}
		output += outputer
	};
	temp.innerHTML = output
});

