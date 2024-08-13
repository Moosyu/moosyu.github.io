//some may call this code bad but i like to call it special
function toggleFullscreen(img) {
	if (!document.fullscreenElement) {
		img.requestFullscreen();
	} else {
		document.exitFullscreen();
	}
}

let ascOrDesc = 'desc';
var count = 0;

function getScoreColor(score) {
    return 	score < 1 ? "#5e5e5e" :
	score < 3 ? "#ff4c4c" :
	score < 5 ? "#ff8888" :
	score < 7 ? "#f0e68c" :
	score < 8 ? "#7bc96f" :
	score < 10 ? "#00cc66" :
	"#9d63d0";
}


function buildTable(results) {
	ascOrDesc = ascOrDesc === 'asc' ? 'desc' : 'asc'; // this is like in the format: condition ? expressionIfTrue : expressionIfFalse;
	count += 1;
	if (count > 1) results.sort((a, b) => ascOrDesc === 'asc' ? a.score - b.score : b.score - a.score);

	const output = results.map(result => `
		<table>
			<tr>
                <td>${jsonName != "https://raw.githubusercontent.com/Moosyu/jsonStorage/main/games.json" ? `[${result.type}]` : ''}<br>(${result.name})<br><p style="color:${getScoreColor(result.score)};">${result.score}/10</p></td>
				${jsonName == "https://raw.githubusercontent.com/Moosyu/jsonStorage/main/amedia.json" ? `<td><img loading="lazy" class="tableimg" src="${result.image}" onclick="toggleFullscreen(this)"></td>` : ''}
				<td>"${result.description}"</td>
			</tr>
		</table>
	`).join('');

	document.querySelector("#output").innerHTML = output;
}

const jsonName = document.URL.includes("game_ratings") ? "https://raw.githubusercontent.com/Moosyu/jsonStorage/main/games.json" : document.URL.includes("abook_ratings") ? "https://raw.githubusercontent.com/Moosyu/jsonStorage/main/amedia.json" : "https://raw.githubusercontent.com/Moosyu/jsonStorage/main/wmedia.json";

fetch(jsonName).then(response => response.json())
	.then(results => {
		buildTable(results);

		document.getElementById("sortScore").addEventListener("click", () => buildTable(results));
		const averageScore = (results.reduce((acc, { score }) => acc + parseInt(score, 10), 0) / results.length);
		document.getElementById("averageScore").innerHTML = "current average score: " + averageScore.toFixed(1);
		document.getElementById("averageScore").title = averageScore.toFixed(3);
});