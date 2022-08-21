var toogle = document.getElementById('toogle');
var pages = document.querySelector('.nav__pages');
var icon = document.getElementById('icon');
icon.onclick = function() {
    document.documentElement.classList.toggle('dark');
    editCookie('darkMode', `${document.documentElement.classList.contains('dark') ? true : false}`, 31);
}
toogle.onclick = function() {
    pages.classList.toggle('nav__pages--visible');
}