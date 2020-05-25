// Toggle navbar on mobile devices
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

// phần này dùng cho tabs
function switchToExterior() {
    removeActive();
    hideAll();
    $("#exterior-tab").addClass("is-active");
    $("#exterior-tab-content").removeClass("is-hidden");
}

function switchToInterior() {
    removeActive();
    hideAll();
    $("#interior-tab").addClass("is-active");
    $("#interior-tab-content").removeClass("is-hidden");
}

function switchToDimensions() {
    removeActive();
    hideAll();
    $("#dimensions-tab").addClass("is-active");
    $("#dimensions-tab-content").removeClass("is-hidden");
}

function removeActive() {
    $("li").each(function () {
        $(this).removeClass("is-active");
    });
}

function hideAll() {
    $("#exterior-tab-content").addClass("is-hidden");
    $("#interior-tab-content").addClass("is-hidden");
    $("#dimensions-tab-content").addClass("is-hidden");
}
// kết thúc tabs

// Open modal in Photo Gallery 
document.querySelector('#open-modal').addEventListener('click', function (event) {
    event.preventDefault();
    var modal = document.querySelector('.modal');  // assuming you have only 1
    var html = document.querySelector('html');
    modal.classList.add('is-active');
    html.classList.add('is-clipped');

    modal.querySelector('.modal-background').addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
    });
});


// Swiper Hero

var swiper = new Swiper(".swiper-container-0", {
    autoplay: {
        delay: 2000,
        reverseDirection: true,
        disableOnInteraction: false,

    },
    speed: 2000,
    preventInteractionOnTransition: true,
    effect: "fade",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    themeColor: '#00d1b2',
});

// Swiper slider - client review

var swiper = new Swiper(".swiper-container", {
    autoplay: {
        delay: 1000,
        disableOnInteraction: false
    },
    speed: 2500,
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

//Swiper Find more property

var swiper = new Swiper(".swiper-container-2", {
    autoplay: {
        delay: 2500,
        reverseDirection: true,
        disableOnInteraction: false
    },
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});