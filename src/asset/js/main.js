document.addEventListener("DOMContentLoaded", function () {
    //Открыть боковое меню в шапке
    const headerAsideMenuOpenBtn = document.querySelector('.js-header-aside-menu-open-btn');
    if (headerAsideMenuOpenBtn) {
        headerAsideMenuOpenBtn.addEventListener('click', function (event) {
            event.preventDefault();

            if (open_header_aside_menu()) {
                open_overlay();
            }
        });
    }

    //Закрыть боковое меню в шапке
    const headerAsideMenuCloseBtn = document.querySelector('.js-header-aside-menu-close-btn');
    if (headerAsideMenuCloseBtn) {
        headerAsideMenuCloseBtn.addEventListener('click', function (event) {
            event.preventDefault();

            if (close_header_aside_menu()) {
                close_overlay();
            }
        });
    }
    document.addEventListener('click', function (event) {
        const headerAsideMenuBody = document.querySelector('.js-header-aside-menu-body');
        if (headerAsideMenuBody && !headerAsideMenuBody.contains(event.target)) {
            if (close_header_aside_menu()) {
                close_overlay();
            }
        }
    }, 1);
    document.addEventListener('keyup', function (event) {
        if (event.key === 'Escape') {
            if (close_header_aside_menu()) {
                close_overlay();
            }
        }
    });

    //Инициализация слайдера в блоке hero
    new Swiper('.js-hero-slider', {
        loop: true,
        speed: 1000,
        slideClass: 'slide',
        wrapperClass: 'wrapper',
        effect: 'fade',
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        autoplay: {
            delay: 4000
        }
    });
});

//Открыть оверлей страницы
function open_overlay() {
    const body = document.querySelector('body');
    const overlay = document.querySelector('.js-page-overlay');

    if (body && overlay && !overlay.classList.contains('active')) {
        body.style.overflow = 'hidden';
        body.style.width = '100%';
        body.style.height = '100%';

        overlay.classList.add('active');

        return true;
    }

    return false;
}


//Закрыть оверлей страницы
function close_overlay() {
    const body = document.querySelector('body');
    const overlay = document.querySelector('.js-page-overlay');

    if (body && overlay && overlay.classList.contains('active')) {
        body.style.removeProperty('overflow');
        body.style.removeProperty('width');
        body.style.removeProperty('height');

        overlay.classList.remove('active');

        return true;
    }

    return false;
}


//Открыть боковое меню в шапке
function open_header_aside_menu() {
    const headerAsideMenuBody = document.querySelector('.js-header-aside-menu-body');
    if (headerAsideMenuBody && !headerAsideMenuBody.classList.contains('active')) {
        headerAsideMenuBody.classList.add('active');

        return true;
    }

    return false;
}

//Закрыть боковое меню в шапке
function close_header_aside_menu() {
    const headerAsideMenuBody = document.querySelector('.js-header-aside-menu-body');
    if (headerAsideMenuBody && headerAsideMenuBody.classList.contains('active')) {
        headerAsideMenuBody.classList.remove('active');

        return true;
    }

    return false;
}