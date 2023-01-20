export function typedText() {
    const selector = document.querySelector('select');
    const autoTyped = document.querySelector('.auto_typed');
    const localStorLang = localStorage.getItem('langLocal');

    if (localStorLang === null || localStorLang === 'ua') {
        autoTyped.classList.add('auto_typed-ua');

        var typed = new Typed('.auto_typed', {
            strings: ['Наталія Шпанюк', 'PR-менеджер'],
            typeSpeed: 120,
            backDelay: 900,
            backSpeed: 60,
            loop: true
        });
    } else {
        autoTyped.classList.add('auto_typed-en');
        var typed = new Typed('.auto_typed', {
            strings: ['Nataliia Shpaniuk', 'PR-manager'],
            typeSpeed: 120,
            backDelay: 900,
            backSpeed: 60,
            loop: true
        });
    }

    selector.addEventListener('change', () => {
        let langChange = selector.value;
        if (langChange !== 'ua' && autoTyped.classList.contains('auto_typed-ua')) {
            autoTyped.classList.remove('auto_typed-ua');
            autoTyped.classList.add('auto_typed-en');

            typed.strings = ['Nataliia Shpaniuk', 'PR Manager']
        } else {
            autoTyped.classList.remove('auto_typed-en');
            autoTyped.classList.add('auto_typed-ua');
            typed.strings = ['Наталія Шпанюк', 'PR Менеджер']
    
        }
    })
    
}