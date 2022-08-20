var icon = document.getElementById('icon');
icon.onclick = function() {
    document.documentElement.classList.toggle('dark');
    editCookie('darkMode', `${document.documentElement.classList.contains('dark') ? true : false}`, 31);
}