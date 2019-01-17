$(document).ready(() => {
    $('.tab-wrap').on('click', '.tab:not(.active)',e =>{
        e.preventDefault();
        $(e.target).closest('.tab-wrap').find('.tab.active').removeClass('active');
        $(e.target).addClass('active')
            .closest('.wrapper')
            .find('.itemContent')
            .hide();
        $($(e.target).attr('href')).fadeIn(400);
    })
})