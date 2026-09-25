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

    function checkHeaderTheme() {
        const rect = header.getBoundingClientRect();

        const x = rect.left + rect.width / 2;
        const y = rect.bottom - 2;

        header.style.pointerEvents = 'none';

        const element = document.elementFromPoint(x, y);

        header.style.pointerEvents = '';

        const darkElement = element?.closest('.dark-theme');

        header.classList.toggle('dark-theme', !!darkElement);
    }

    window.addEventListener('scroll', checkHeaderTheme, { passive: true });
    window.addEventListener('resize', checkHeaderTheme);

    checkHeaderTheme();
});