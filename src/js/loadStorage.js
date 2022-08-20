setTheme(getCookie('darkMode'));

function setTheme(value) {
    if(value === 'true') {
        document.documentElement.classList.add('dark');
    } else document.documentElement.classList.remove('dark');
}