$(document).ready(function() {
    $('.circles').on('click', '.circle:not(.active)', e => {
        // e.preventDefault();
        $(e.target).closest('.circles')
            .find('.circle.active')
            .removeClass('active');

        $(e.target).addClass('active')
            .closest('.hot-deals')
            .find('.circle-content')
            .hide();

        $($(e.target).attr('href')).fadeIn(200);
    });

    var timerId1 = setInterval(function() {
        $('#circle2').trigger('click');
            console.log('MOZZZG');
      }, 5000);

    var timerId2 = setInterval(function() {
        $('#circle3').trigger('click');
            console.log('MOZZZG');
      },10000);

    var timerId3 = setInterval(function() {
        $('#circle1').trigger('click');
            console.log('MOZZZG');
      }, 15000);
      
      setTimeout(function() {
        clearInterval(timerId);
        console.log('MOZZZG');
      }, 9000);
});
