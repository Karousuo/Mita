var icon = document.getElementById('icon');
icon.onclick = function() {
    document.body.classList.toggle('theme--dark');
    if (document.body.classList.contains('theme--dark')) {
        icon.src = './images/sun.png';
    } else icon.src = './images/moon.png';
}