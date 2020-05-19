$(document).ready(function () {
    $('.modal__top-close').on('click', function () {
        let block = document.querySelectorAll('.modal')
        block[0].style.display = 'none'

        return false;
    })

    $('.open').on('click', function () {
        let block = document.querySelectorAll('.modal')
        block[0].style.display = 'block'
        
        return false;
    })
})
