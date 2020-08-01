//  .before()
$('div').before('<h2>Look: before</h2>');
// .after()
$('div').after('<h2>Look: after</h2>');
$("div").after(
    document.createTextNode("Hello")
);
// .even()
$('ul li').even().addClass("highlight");

setInterval( () => {
    $(".first").before($(".end"));
    },3000
);

$(".first").after($(".end"));

setInterval(() => {
    $('ul li:even').text('list');
    $('ul li[3]').text('23423');
},4000);

// let d = $('body').data('gian',23);
// console.log("1"+d);
// let d = $('body').data('id', { old: true });
// console.log("2"+d);
// let d = $('body').data({tick: [1,2,3,4]});
// console.log("3"+d);

var nama = $("div").data( "test", { first: 16, last: "pizza!" } );
console.log(nama('div').first)
console.log(nama)
// $( "span" ).first().text( $( "div" ).data( "test" ).first );
// $( "span" ).last().text( $( "div" ).data( "test" ).last );
