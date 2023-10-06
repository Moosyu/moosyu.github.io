//some may call the jsonName code bad but i like to call it special
if (document.URL.includes("gamereviews")) {
    jsonName = "../../../js/media.json"
}
else if((document.URL.includes("bookreviews"))) {
	jsonName = "../../../js/media.json"
}


//document.getElementById("test").textContent=(jsonName);
fetch(jsonName).then(function(response){
	return response.json();
}).then(function(results){
	var output = "";
	var temp = document.querySelector("#output");
	for (var result of results){
	output += `<table> 
		<tr>
			<td>[${result.type}]<br>(${result.name})<br>${result.score}</td>
			<td> <a href="${result.image}"> <img class="tableimg" src="${result.image}"> </a> </td>
			<td>"${result.description}"</td>
		</tr>
	</table>`};
temp.innerHTML = output;
});