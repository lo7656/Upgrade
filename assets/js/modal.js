$(document).ready(function () {
    $('.modal__top-close').on('click', function () {
        let block = document.querySelector('.modal')
        if (block.style.display == 'none')
            block.style.display = 'block'
        else
            block.style.display = 'none'

        return false;
    })

    $('.navbar__btns-open').on('click', function () {
        let block = document.querySelector('.modal')
        block.style.display = 'block'

        return false;
    })
})
