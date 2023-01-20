export function sctollToSection() {
    const navLinks = document.querySelectorAll('.nav_link[data-scroll]');
    const menuClose = document.querySelector('.nav');
    const burgerClose = document.querySelector('.menu_icon');
    
    if (navLinks.length > 0) {
        navLinks.forEach(navLink => {
            navLink.addEventListener('click', onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            e.preventDefault();
            if (this.dataset.scroll && document.querySelector(this.dataset.scroll)) {
                const scrollBlock = document.querySelector(this.dataset.scroll);
                const scrollToBlockValue = scrollBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight + 70;

                if (menuClose.classList.contains('active')) {
                    burgerClose.classList.remove('active');
                    menuClose.classList.remove('active');
                    document.body.classList.remove('lock');
                }

                window.scrollTo({
                    top: scrollToBlockValue,
                    behavior: 'smooth'
                });
            }
        }
    }

}