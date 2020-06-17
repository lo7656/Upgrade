$('.slider').slick({
    dots: true,
    centerMode: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000
})


document.querySelectorAll('.answers__card-title').forEach(e => {
    let state = false

    e.addEventListener('click', () => {
        state = !state
        e.parentElement.classList.toggle('active')
    })

})

// $(document).ready(function () {

// })
