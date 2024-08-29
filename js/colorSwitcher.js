function toggleTheme() { 
    var theme = document.getElementsByTagName('link')[0]; 
    
    if (theme.getAttribute('href') == '/catppuccin.css') { 
        theme.setAttribute('href', '/blue.css');; 
        localStorage.setItem('theme', '/blue.css');
    } else { 
        theme.setAttribute('href', '/catppuccin.css'); 
        localStorage.setItem('theme', '/catppuccin.css');
    } 

}

function loadTheme() {
    var savedTheme = localStorage.getItem('theme');
    var theme = document.getElementsByTagName('link')[0];
    if (savedTheme) {
        theme.setAttribute('href', savedTheme); 
    }
}

document.addEventListener('DOMContentLoaded', loadTheme);