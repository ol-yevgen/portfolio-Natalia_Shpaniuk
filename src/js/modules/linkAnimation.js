export function linkAnimation() {
    const navLinks = document.querySelectorAll('.nav_item');
    const menu = document.querySelector('.menu_icon');

    menu.addEventListener('click', linkAnimation);
    for (let item = 0; item < navLinks.length; item++) {
        navLinks[item].addEventListener('click', linkAnimation);
    }

    function linkAnimation() {
        if (menu.classList.contains('active')) {
            for (let item = 0; item < navLinks.length; item++) {
                navLinks[item].classList.add('link-animation');
            }

        } else {
            for (let item = 0; item < navLinks.length; item++) {
                navLinks[item].classList.remove('link-animation');
            }
        }
    }

    


}