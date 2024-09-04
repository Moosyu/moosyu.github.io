// returns the first element that has link <link rel="stylesheet">
const themeLink = document.querySelector('link[rel="stylesheet"]');

function toggleTheme() {
    // grabs the href from <link rel="stylesheet">
    const currentTheme = themeLink.getAttribute('href');

    // fancy if-else. if theme is catppuccin then new theme = blue, if not new theme = catppuccin
    const newTheme = currentTheme === '/css/catppuccin.css' ? '/css/blue.css' : '/css/catppuccin.css';
    
    // updates themelink href to the new theme (this is what actually changes the theme)
    themeLink.setAttribute('href', newTheme);

    // adds "theme" to localstorage and the value = newtheme
    localStorage.setItem('theme', newTheme);
}

function loadTheme() {
    // grabs "theme" from localstorage
    const savedTheme = localStorage.getItem('theme');

    // makes sure theme isnt empty then sets the href to what it found in theme
    if (savedTheme) {
        themeLink.setAttribute('href', savedTheme);
    }
}

// domcontentload > than window.onload bc window.onload waits till the whole page loads
// so it can take like a full second for the theme to switch
document.addEventListener('DOMContentLoaded', loadTheme);