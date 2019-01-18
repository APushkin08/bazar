$(document).ready(() => {
    $('.circles').on('click', '.circle:not(.active)',e =>{
        e.preventDefault();
        $(e.target).closest('.circles').find('.circle.active').removeClass('active');
        $(e.target).addClass('active')
            .closest('.deals-wrapp')
            .find('.circle-content')
            .hide();
        $($(e.target).getElementsByClassName('test')).fadeIn(400);
    })
})