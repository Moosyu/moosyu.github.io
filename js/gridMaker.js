if (document.URL.includes("bookshelf")) {
	jsonName = "https://raw.githubusercontent.com/Moosyu/jsonStorage/main/bookshelf.json"
} else {
	jsonName = "https://raw.githubusercontent.com/Moosyu/jsonStorage/main/recordroom.json"
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
				<p>${result.name}</p>
				<a href="${result.site}" target="_blank"> <img loading="lazy" class="tableimg" src="${result.image}"> </a>
				<p style="padding: 2px;">${result.description}</p>
			</div>
		</div>
		</div>`	
		} else {
			outputer = `<div class="cell">
			<div style="color: white;">
				<p>${result.name}</p>
				<div style="perspective: 800px;">
				<img loading="lazy" class="album_animation_thingyF" src="${result.image} ">
				<img loading="lazy" class="album_animation_thingyB" src="${result.imageB} ">
				</div>
				<p style="padding: 2px;">${result.description}</p>
			</div>
		</div>
		</div>`	
		}
	output += outputer
	};
	temp.innerHTML = output
});
