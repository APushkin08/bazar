$.getJSON("./json/russian-cities.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});

// $(document).ready(() => {
//     let list = 'russian-cities.json';
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
//     let list = 'russian-cities.json';

//     fetch(list)
//         .then(result => result.json())
//         .then(data => {
//             let $select = $('#city');
//             let $cityData = $('<datalist/>', {
//                 id: 'city-list'
//             });
//             $('.wrap').append($cityData);
//             for (let city of data){
//                 $cityData.append($(`<option value="${city.name}">${city.name}</option>`));
//             }
//             $select.keyup(() => {
//                 if ($select.val().length > 2){
//                     $select.attr('list', $cityData.attr('id'));
//                 }
//             })
//         })
// });