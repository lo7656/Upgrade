window.onresize = function (event) {
    gichange()
}

function hide(obj) {
    console.log(obj.id)

    let arrInfo = document.querySelectorAll('.types__list-info')
    let arrImg = document.querySelectorAll('.types__list-img')

    if (arrInfo[obj.id].style.visibility != "visible"){
        arrInfo[obj.id].style.visibility = "visible"
        arrImg[obj.id].style.opacity = 0.4
    }
        
    else{
        arrInfo[obj.id].style.visibility = "hidden"
        arrImg[obj.id].style.opacity = 0.8
    }
        


}

function change(){
    let arrImg = document.querySelectorAll('.types__list-img')
    let arrInfo = document.querySelectorAll('.types__list-info')
    let arrBtns = document.querySelectorAll('.info')

    if (document.documentElement.clientWidth < 1201) {

        for (const obj of arrInfo) {
            obj.style.visibility = "hidden"
        }

        for (const obj of arrBtns) {
            obj.style.visibility = "visible"
        }

    } else if (document.documentElement.clientWidth > 1201) {
        for (const obj of arrInfo) {
            obj.style.visibility = "visible"
        }

        for (const obj of arrBtns) {
            obj.style.visibility = "hidden"
        }
    }


    $('.info').on('click', function () {
        console.log()
    })
}
$(document).ready(function () {
    change()
})