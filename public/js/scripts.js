/*!
* Start Bootstrap - Copyright 2013-2021 (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
/*!
* Joice Team - Copyright 2021-2021 joiceapp team
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    //Cookie banner
    const ckButton = document.body.querySelector('#ck-dismiss');
    const ckBanner = document.body.querySelector('#cookie-card');

    ckButton.addEventListener('click', event => {
        ckBanner.hidden = true;
    });

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

