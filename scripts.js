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