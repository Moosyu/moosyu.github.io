//some may call this code bad but i like to call it special
function toggleFullscreen(img) {
	if (!document.fullscreenElement) {
		img.requestFullscreen();
	} else {
		document.exitFullscreen();
	}
}

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
	var scores = [];
	var output = "";
	var temp = document.querySelector("#output");
	for (var result of results) {
		scores.push(result.score);
		if (document.URL.includes("game_ratings")) {
			outputer = `<table> 
		<tr">
			<td>(${result.name})<br>${result.score}/10</td>
			<td>"${result.description}"</td>
		</tr>
		</table>`
		} else if (document.URL.includes("wbook_ratings")) {
			outputer = `<table> 
		<tr>
			<td>[${result.type}]<br>(${result.name})<br>${result.score}/10</td>
			<td>"${result.description}"</td>
		</tr>
		</table>`
		} else {
			outputer = `<table> 
			<tr>
				<td>[${result.type}]<br>(${result.name})<br>${result.score}/10</td>
				<td><img loading="lazy" class="tableimg" src="${result.image}" onclick="toggleFullscreen(this)"></td>
				<td>"${result.description}"</td>
			</tr>
		</table>`
		}
		output += outputer
	}
	temp.innerHTML = output
	var intStr = scores.map(str => parseInt(str, 10)); //the 10 means its doing hexadecimal because what the fuck of course it is
	document.getElementById("averageScore").innerHTML = "current average score: "+((intStr.reduce((acc, num) => acc+ num, 0)) / intStr.length).toFixed(1);
});