$(document).ready(function slide() {
    $('.circles').on('click', '.circle:not(.active)', e => {
        // e.preventDefault();
        $(e.target).closest('.circles').find('.circle.active').removeClass('active');
        $(e.target).addClass('active')
            .closest('.hot-deals')
            .find('.circle-content')
            .hide();
        $($(e.target).attr('href')).fadeIn(200);
    });
    var timerId = setInterval(function() {
        console.log('MOZZZG');
        
      }, 2000);
      
      setTimeout(function() {
        clearInterval(timerId);
        console.log('MOZZZG');
      }, 15000);
});
