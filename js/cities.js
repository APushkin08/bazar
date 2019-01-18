// $(document).ready(() => {
//     let list = 'https://raw.githubusercontent.com/APushkin08/bazar/master/json/russian-cities.json';
//     fetch(list)
//         .then(result => result.json())
//         .then(data => {
//             let $select = $('#city');
//             for (let city of data){
//                 $select.append($(`<option value="${city.name}">${city.name}</option>`));
//             }
//         })

// })


// $(document).ready(() => {
//     let list = 'https://raw.githubusercontent.com/APushkin08/bazar/master/json/russian-cities.json';
//     fetch(list)
//         .then(result => result.json())
//         .then(data => {
//             let $select = $('city');
//             $select.keyup(() => {
//                 $('.list').remove();
//                 if ($select.val().length > 2) {
//                     let $block = $('<div/>', {
//                         class: 'list'
//                     });
//                     let search = new RegExp($select.val(), 'i');
//                     for (let city of data) {
//                         if (search.test(city.name)) {
//                             $block.append($(`<p class="city">${city.name}</p>`));

//                         }
//                     }
//                     $block.appendTo($('.wrap'));
//                     $block.on('click', 'p', e => {
//                         $select.val(e.target.textContent)
//                         $('.list').remove();
//                     });
//                 }
//             })
//         })
// });
$(document).ready(() => {
    let list = 'https://raw.githubusercontent.com/APushkin08/bazar/master/json/russian-cities.json';

    fetch(list)
        .then(result => result.json())
        .then(data => {
            let $select = $('#city');
            let $cityData = $('<datalist/>', {
                id: 'city-list'
            });
            $('.wrap').append($cityData);
            for (let city of data){
                $cityData.append($(`<option value="${city.name}">${city.name}</option>`));
            }
            $select.keyup(() => {
                if ($select.val().length > 2){
                    $select.attr('list', $cityData.attr('id'));
                }
            })
        })
});