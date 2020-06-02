window.onresize = function (event) {
    change()
}

function hide(obj) {
    console.log(obj.id)

    let arrInfo = document.querySelectorAll('.types__list-info')
    let arrImg = document.querySelectorAll('.types__list-img')

    if (arrInfo[obj.id].style.visibility != "visible") {
        arrInfo[obj.id].style.visibility = "visible"
        arrImg[obj.id].style.opacity = 0.4
    }

    else {
        arrInfo[obj.id].style.visibility = "hidden"
        arrImg[obj.id].style.opacity = 0.8
    }



}

function change() {
    let arrImg = document.querySelectorAll('.types__list-img')
    let arrInfo = document.querySelectorAll('.types__list-info')
    let arrBtns = document.querySelectorAll('.info')

    if (document.documentElement.clientWidth < 1201) {

        console.log('меньше')
        for (const obj of arrInfo) {
            obj.style.visibility = "hidden"
        }

        for (const obj of arrBtns) {
            obj.style.visibility = "visible"
        }

    } else if (document.documentElement.clientWidth > 1201) {

        for (const obj of arrImg) {
            obj.style.opacity = 0.8
        }

        console.log('больше')
        for (const obj of arrInfo) {
            obj.style.visibility = "visible"
        }

        for (const obj of arrBtns) {
            obj.style.visibility = "hidden"
        }
    }



}

$(document).ready(function () {
    change()

    $('.open').on('click', function () {
        
        let modal = document.querySelector('.modal')
        let nav = document.querySelector('.navbar')
        let icons = document.querySelectorAll('.navbar__icons-icon')
        let body = document.querySelector('body')
        let logo = document.querySelector('.navbar__logo-img')
       


        if (modal.style.display == 'block'){
            modal.style.display = 'none'
            nav.style.backgroundColor = '#1D1D1D'
            icons[1].src = 'assets/img/menu-white.png'
            icons[0].src = 'assets/img/mail-white.png'
            logo.src = 'assets/img/logo-white.png'
            body.style.marginTop = '0'

        }
        else{
            modal.style.display = 'block'
            nav.style.backgroundColor = '#FFFFFF'
            icons[1].src = 'assets/img/menu-dark.png'
            icons[0].src = 'assets/img/mail-dark.png'
            logo.src = 'assets/img/logo-dark.png'
            body.style.marginTop = '521px'
        }
            
    })
})