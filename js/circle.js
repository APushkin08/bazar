$(document).ready(() => {
    $('.circles').on('click', '.circle:not(.active)',e =>{
        console.log('MOZZZZZG');
        e.preventDefault();
        $(e.target).closest('.circles').find('.circle.active').removeClass('active');
        $(e.target).addClass('active')
            .closest('.hot-deals')
            .find('.circle-content')
            .hide();
            $($(e.target).attr('href')).fadeIn(800);
    })
})
// $(document).ready(() => {
//     $('.circles').on('click', '.circle:not(.active)', e =>{
        
//         e.preventDefault();
//         $(e.target).closest('.circles').find('.circle.active').removeClass('active');
//         // $(e.target).addClass('active')
// })
