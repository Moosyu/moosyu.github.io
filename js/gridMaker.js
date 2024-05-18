fetch("../../../js/bookshelf.json").then(function (response) {
	return response.json();
}).then(function (results) {
	var output = "";
	var temp = document.querySelector("#output");
	for (var result of results) {
	outputer = `<div class="cell">
        <div style="color: white;">
            <p>${result.name}</p>
            <a href="${result.site}" target="_blank"> <img loading="lazy" class="tableimg" src="${result.image}"> </a>
            <p style="padding: 2px;">${result.description}</p>
        </div>
	</div>
	</div>`
	output += outputer
	};
	temp.innerHTML = output
});
