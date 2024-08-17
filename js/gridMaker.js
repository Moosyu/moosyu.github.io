if (document.URL.includes("bookshelf")) {
	jsonName = "https://raw.githubusercontent.com/Moosyu/jsonStorage/main/bookshelf.json"
} else {
	jsonName = "https://raw.githubusercontent.com/Moosyu/jsonStorage/main/recordroom.json"
}

function getScoreColor(score) {
    return 	score < 1 ? "#5e5e5e" :
	score < 3 ? "#ff4c4c" :
	score < 5 ? "#ff8888" :
	score < 7 ? "#f0e68c" :
	score < 8 ? "#7bc96f" :
	score < 10 ? "#00cc66" :
	"#9d63d0";
}


fetch(jsonName).then(function (response) {
	return response.json();
}).then(function (results) {
	var output = "";
	var temp = document.querySelector("#output");
	for (var result of results) {
		if (document.URL.includes("bookshelf")) {
			outputer = `<div class="cell">
			<div style="color: white;">
				<p style="font-size: calc(1.3vw + 1.3vh);">${result.name}</p>
				<a href="${result.site}" target="_blank"> <img loading="lazy" class="tableimg" src="${result.image}"> </a>
				<p style="padding: 2px; font-size: calc(0.7vw + 0.7vh);">${result.description}</p>
			</div>
		</div>
		</div>`	
		} else {
			outputer = `<div class="cell">
			<div style="color: white;">
				<h2>${result.name}</h2>
				<h3>${result.artist}<h3>
				<p style="color:${getScoreColor(result.score)};">${result.score}/10</p>
				<p style="padding: 5px;">${result.description}</p>
				<div style="perspective: 800px;">
				<img loading="lazy" class="album_animation_thingyF" src="${result.image} ">
				<img loading="lazy" class="album_animation_thingyB" src="${result.imageB} ">
				</div>
			</div>
		</div>
		</div>`	
		}
	output += outputer
	};
	temp.innerHTML = output
});
