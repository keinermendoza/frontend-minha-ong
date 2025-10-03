// open and close menu on mobile
const button = document.getElementById("button-menu-toggle");
const menu = document.getElementById("navigation-menu");

button.onclick = () => {
    console.log('cliecked')
    menu.classList.toggle('is-open');
}