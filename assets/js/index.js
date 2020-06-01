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

// $(document).ready(function () {
//     change()

//     $('.types__list-button').on('click', function () {
//         let modal = document.querySelector('.modal')

//         if (modal.style.display == 'none')
//             modal.style.display = 'block'
//         else
//             modal.style.display = 'none'
//     })
// })