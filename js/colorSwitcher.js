function toggleTheme() { 
    var theme = document.getElementsByTagName('link')[0]; 
    var checkbox = document.getElementById("sliderId");
    checkbox.checked == false
    

    if (theme.getAttribute('href') == '/catppuccin.css') { 
        theme.setAttribute('href', '/blue.css');; 
        localStorage.setItem('theme', '/blue.css');
        localStorage.setItem('sliderId', 'false');
    } else { 
        theme.setAttribute('href', '/catppuccin.css'); 
        localStorage.setItem('theme', '/catppuccin.css');
        localStorage.setItem('sliderId', 'true');
    } 

    checkbox.checked = (localStorage.getItem('sliderId') === 'true');
}

function loadTheme() {
    var savedTheme = localStorage.getItem('theme');
    var theme = document.getElementsByTagName('link')[0];
    var checkbox = document.getElementById("sliderId");
    if (savedTheme) {
        theme.setAttribute('href', savedTheme); 
    }
    if (document.URL.includes("index")) {
    checkbox.checked = (localStorage.getItem('sliderId') === 'true');
    }
}

window.onload = loadTheme;