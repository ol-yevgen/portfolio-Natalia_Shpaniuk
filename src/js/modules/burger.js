export function burger() {
    const menu = document.querySelector('.nav');
    const burger = document.querySelector('.menu_icon');

    burger.addEventListener('click', openCloseMenu);

    function openCloseMenu() {
        burger.classList.toggle('active');
        if (!menu.classList.contains('active')) {
            menu.classList.add('active');
        } else {
            setTimeout(() => {
                menu.classList.remove('active');
            }, 1000);
        }
        document.body.classList.toggle('lock');
    }
}