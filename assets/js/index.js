let nav = document.querySelector('.navbar')
let icons = document.querySelectorAll('.navbar__icons-icon')
let body = document.querySelector('body')
let logo = document.querySelector('.navbar__logo-img')
let btns = document.querySelectorAll('.navbar__btns-btn')
let modal = document.querySelector('.modal')

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

function check() {
    if (window.pageYOffset == 0) {
        trans()
    } else{
        white()
    }
}

function trans() {
    modal.style.display = 'none'
    modal.style.transition = '0.3s'
    nav.style.backgroundColor = 'transparent'
    icons[1].src = 'assets/images/menu-dark.png'
    icons[0].src = 'assets/images/mail-dark.png'
    logo.src = 'assets/images/logo-dark.png'
    body.style.marginTop = '0'
    btns[0].style.backgroundColor = 'transparent';
    btns[1].style.backgroundColor = 'transparent';
    btns[0].style.border = '1px solid #1D1D1D';
    btns[1].style.border = '1px solid #1D1D1D';
    btns[0].style.color = '#1D1D1D';
    btns[1].style.color = '#1D1D1D';
}

function white() {
    modal.style.display = 'none'
    modal.style.transition = '0.3s'
    nav.style.backgroundColor = '#1D1D1D'
    icons[1].src = 'assets/images/menu-white.png'
    icons[0].src = 'assets/images/mail-white.png'
    logo.src = 'assets/images/logo-white.png'
    body.style.marginTop = '0'
    btns[0].style.backgroundColor = '';
    btns[1].style.backgroundColor = '';
    btns[0].style.border = '1px solid #FFFFFF';
    btns[1].style.border = '1px solid #FFFFFF';
    btns[0].style.color = '#FFFFFF';
    btns[1].style.color = '#FFFFFF';
}

function dark() {
    modal.style.display = 'block'
    modal.style.transition = '0.3s'
    nav.style.backgroundColor = '#FFFFFF'
    icons[1].src = 'assets/images/menu-dark.png'
    icons[0].src = 'assets/images/mail-dark.png'
    logo.src = 'assets/images/logo-dark.png'
    body.style.marginTop = '521px'
    btns[0].style.backgroundColor = '#FFFFFF';
    btns[1].style.backgroundColor = '#FFFFFF';
    btns[0].style.border = '1px solid #1D1D1D';
    btns[1].style.border = '1px solid #1D1D1D';
    btns[0].style.color = '#1D1D1D';
    btns[1].style.color = '#1D1D1D';
}



$(document).ready(function () {

    window.addEventListener('scroll', function(){
        check()
        console.log('work')
    })

    $('.open').on('click', function () {

        modal = document.querySelector('.modal')




        if (modal.style.display == 'block') {
            white()
        }
        else {
            dark()

        }

    })
})

