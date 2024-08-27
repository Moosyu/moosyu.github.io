function tabSwitch(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    var tab = document.getElementById(tabName);
    tab.style.display = "block";
    evt.currentTarget.className += " active";

    var images = tab.getElementsByTagName("img");
    for (i = 0; i < images.length; i++) {
        if (images[i].getAttribute('data-src')) {
            images[i].src = images[i].getAttribute('data-src');
            images[i].removeAttribute('data-src');
            console.log('loading image:', images[i].getAttribute('data-src'));

        }
    }
}

document.getElementById("defaultOpen").click();

    function handleClick(e) {
    if (e.target.tagName === 'IMG') {
            toggleFullscreen(e.target);
        }
    };

    document.getElementById('panels').addEventListener('click', handleClick);
    document.getElementById('2024').addEventListener('click', handleClick);

  function toggleFullscreen(img) {
	if (!document.fullscreenElement) {
		img.requestFullscreen();
	} else {
		document.exitFullscreen();
	}
 }