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
        let btns = document.querySelectorAll('.navbar__btns-btn')
       


        if (modal.style.display == 'block'){
            modal.style.display = 'none'
            modal.style.transition='0.3s'
            nav.style.backgroundColor = '#1D1D1D'
            icons[1].src = 'assets/img/menu-white.png'
            icons[0].src = 'assets/img/mail-white.png'
            logo.src = 'assets/img/logo-white.png'
            body.style.marginTop = '0'
            btns[0].style.backgroundColor = '';
            btns[1].style.backgroundColor = '';
            btns[0].style.border = '';
            btns[1].style.border = '';
            btns[0].style.color = '';
            btns[1].style.color = '';
        }
        else{
            modal.style.display = 'block'
            modal.style.transition='0.3s'
            nav.style.backgroundColor = '#FFFFFF'
            icons[1].src = 'assets/img/menu-dark.png'
            icons[0].src = 'assets/img/mail-dark.png'
            logo.src = 'assets/img/logo-dark.png'
            body.style.marginTop = '521px'
            btns[0].style.backgroundColor = '#FFFFFF';
            btns[1].style.backgroundColor = '#FFFFFF';
            btns[0].style.border = '1px solid #1D1D1D';
            btns[1].style.border = '1px solid #1D1D1D';
            btns[0].style.color = '#1D1D1D';
            btns[1].style.color = '#1D1D1D';

        }
            
    })
})