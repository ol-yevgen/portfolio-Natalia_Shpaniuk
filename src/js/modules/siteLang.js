export function siteLang() {
    const select = document.querySelector('select');
    const localLang = localStorage.getItem('langLocal');
    let locationHash = window.location.pathname + "#";
    const langArr = {
        "siteTitle": {
            "ua": "Портфоліо Наталія Шпанюк",
            "en": "Portfolio Natalia Shpanuk"
        },
        "about": {
            "ua": "Про мене",
            "en": "About"
        },
        "portfolio": {
            "ua": "Портфоліо",
            "en": "Portfolio"
        },
        "contacts": {
            "ua": "Контакти",
            "en": "Contacts"
        },
        "greetings": {
            "ua": "Привіт! Я — ",
            "en": "Hello, I'm"
        },
        "about_text": {
            "ua": 
            `<h2 class="about_text--name anim-item">Ваш ідеальний креативний PR-менеджер, оскільки:</h2>
            <ul class="about_text_list anim-item">
                <li class="anim-show">4 роки працюю й удосконалююсь у піарі та журналістиці, 2 роки — у диджиталі;</li>
                <li class="anim-show">не боюсь дедлайнів і фрази: «Мені через годину потрібен реліз» :)</li>
                <li class="anim-show">організовую заходи, створюю контент для ЗМІ і соцмереж.</li>
            </ul>
            `,
            "en": 
            `<h2 class="about_text--name anim-item">Iʼm your ideal creative PR-manager, because:</h2>
            <ul class="about_text_list anim-item">
                <li class="anim-show">I have been working and improving in PR and journalism for 4 years, 2 —years in digital;</li>
                <li class="anim-show">I am not afraid of deadlines and the phrase: "I need a press release in an hour"</li>
                <li class="anim-show">I organize events, create content for the media and social networks.</li>
            </ul>
            `
        },
        "resume": {
            "ua": "резюме",
            "en": "resume"
        },
        "portfolio_title": {
            "ua": "Портфоліо",
            "en": "Portfolio"
        },
        "ukr": {
            "ua": "«Україна 24», новини «Сьогодні» на каналі «Україна»",
            "en": "«Ukraine 24», news program «Segodnya» on the TV channel «Ukraine»"
        },
        "ukr24": {
            "ua":
                "Розробляла  стратегію просування проєктів і ведучих каналу «Україна 24», новин «Сьогодні» (канал «Україна). Генерувала інфоприводи, ініціювала згадування про ведучих, топменеджерів, спецефіри медіагрупи на внутрішніх офіційних ресурсах та в зовнішніх ЗМІ. Писала тексти для ЗМІ та соцмереж. Забезпечувала інформаційну підтримку партнерств каналу  (інформаційне партнерство фестивалю Docudays UA 2019, медіапартнерство проєкту Єлизавети Ясько «Як звучить Україна»).",
            "en":
                `Developed a strategy for promoting projects and hosts of the TV channel "Ukraine 24", news program "Segodnya"  (TV channel "Ukraine"). I wrote the texts for the media and social networks about the projects of the media group, special broadcasts, presenters, top managers; provided information support of channel partnerships.`
        },"fres": {
            "ua": "«Фрезеніус Медикал Кер Україна»",
            "en": "Fresenius Medical Care Ukraine"
        },
        "fresenius": {
            "ua": 
                `Розробляла комунікаційну стратегію й окремі PR-кампанії, антикризовий піар; ініціювала участь у фахових виставках, організовувала заходи (вебінари для лікарів, фейсбук-трансляції з лікарями для пацієнтів, медіавідкриття медичного центру в Харкові).<br/>

                Створювала контент для соцмереж (для фейсбук-сторінки «Pro нирки») та сайту компанії. Комунікувала з пацієнтами, зі ЗМІ (написання колонок, коментарів, пресрелізів, статей, інтервʼю, подкастів).`,
            "en": 
                `I developed a communication strategy and PR campaigns, anti-crisis PR; initiated participation in professional exhibitions, organized events (webinars for doctors, Facebook broadcasts with doctors for patients, media opening of the medical center in Kharkiv).<br/>
                I created content for social networks (for the Facebook page "Pro нирки") and the company's website. Communicated with patients, with the media (writing columns, comments, press releases, articles, interviews, podcasts).`
        },
        "lev": {
            "ua": "LeverX Group",
            "en": "LeverX Group"
        },
        "leverX": {
            "ua":
                "Брала участь у розвитку HR-бренду компанії; створенні PR-стратегії. Ініціювала PR-кампанії для залучення співробітників; популяризувала ІТ-курси компанії, взаємодіяла з університетами, студентськими спільнотами; комунікувала зі ЗМІ (написання пресрелізів, статей, інтервю, анонсів, створення профільних сторінок компанії).<br/> Організовувала заходи (мітапи), супроводжувала проєкти з інформування співробітників (новинні розсилки, огляди, буклети корпоративних видань), внутрішній документообіг і звітність. ",
            "en":
                "Designed, implemented the company’s HR brand; created the company’s PR strategy, developed a plan for conducting PR campaigns to attract employees. I popularized the company's IT courses, interacted with universities, student communities; communicated with the media and created different materials (columns, comments, press releases, articles, interviews, podcasts). Organized events (meetups). Supported of projects for informing employees (newsletters, reviews, brochures of corporate publications)."
        },
        "ins": {
            "ua": "Instagram",
            "en": "Instagram"
        },
        "instagram": {
            "ua":
                "Створювала контент (сторіз, пости, опитування) про життя українського офісу, колективу компанії, анонси про фахові заходи, які організовує команда в Україні. Брифувала дизайнера щодо графіки та СММ-менеджера — щодо дати публікації, налаштування таргетингової реклами.",
            "en":
                `I created the content (stories, posts, surveys) about the life of the Ukrainian office, the company's staff, announcements about professional events organized by the team in Ukraine.<br/>
                I briefed the designer about the graphics and the SMM manager about the date of publication, setting up targeted advertising.`
        },
        "you": {
            "ua": "YouTube",
            "en": "YouTube"
        },
        "youTube": {
            "ua": 
                `Продумувала слогани, ідеї, сценарій для роликів, координувала процес знімання та публікації готового ролика («Україна 24», «Фрезеніус Медикал Кер Україна»).<br/>
                Публікувала контент на ютуб-каналі, створювала субтитри, синопсиси до відео; відстежувала ефективність контенту, аналітику.`,
            "en":
                `I created slogans, ideas, video description, coordinated the process of shooting and publishing the finished video ("Ukraine 24", Fresenius Medical Care Ukraine).<br/>
                I published content on a YouTube channel, created subtitles, synopsis for videos; tracked the effectiveness of content, analytics.`
        },
        "myContact": {
            "ua": "Moї контакти:",
            "en": "My contacts:"
        },
        "footer_about": {
            "ua": "Про мене",
            "en": "About"
        },
        "footer_portfolio": {
            "ua": "Портфоліо",
            "en": "Portfolio"
        },
        "footer_contacts": {
            "ua": "Контакти",
            "en": "Contacts"
        }
    
    }

    select.addEventListener('change', changeURLLanguage);

    if (localLang === null || localLang === 'ua') {
        select.value = 'ua';
        location.href = `${locationHash}ua`;
        changeLanguage();
    } else {
        select.value = 'en';
        location.href = `${locationHash}en`;
        changeLanguage();
    }

    function changeLanguage() {
        let hash = window.location.hash;
        hash = hash.slice(1);
        localStorage.setItem('langLocal', hash);
        for (let key in langArr) {
            document.querySelector('.lng-' + key).innerHTML = langArr[key][hash];
        }
    }

    function changeURLLanguage() {
        let lang = select.value;
        location.href = locationHash + lang;
    
        changeLanguage();
        window.location.reload();
    }


}