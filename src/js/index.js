import "../styles/main.scss";

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const menuTriggers = document.querySelectorAll('#btn-menu, nav li a');

    menuTriggers.forEach(menuTrigger => {
        menuTrigger.onclick = function() {
            header.classList.toggle('menu-active');
        }
    });

    window.addEventListener('scroll', () => {
        header.classList.toggle('is-sticky', window.scrollY >= header.offsetHeight);
    });
});