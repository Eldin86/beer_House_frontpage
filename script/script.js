var glass = document.getElementById('glass');

//show reservation button onload
window.onload = function () {
    document.getElementById('reservation-button').style.cssText = "margin-left: 0px;  transition: 1s margin-left ease-in;";
}

//Show elements on scroll
function onScroll() {
    let distanceTop = glass.getBoundingClientRect().top;
    let offset = window.pageYOffset;

    if (offset >= (distanceTop + 100)) {
        glass.classList.add('glass-show');
    }
}
window.addEventListener('scroll', onScroll);

//Slider jQuery
$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        autoplay: true,
        arrows: false
    });

    $('.left').click(function () {
        $('.slider').slick('slickPrev');
    })

    $('.right').click(function () {
        $('.slider').slick('slickNext');
    })
});
