
$(document).ready(function () {
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

    let cflag = 2;
    let timerId = setInterval(() => {
        switch (cflag) {
            case 1: {
                $('#circle1').trigger('click');
                cflag = 2;
            };
            break;
            case 2: {
                $('#circle2').trigger('click');
                cflag = 3;
            };
            break;
            case 3: {
                $('#circle3').trigger('click');
                cflag = 1;
            };
            break;
            default: console.log('значение cflag\'a вне диапазона 1-3')
        }
    }, 5000)

      setTimeout(function() {
        clearInterval(timerId);
      }, 60000);
});
