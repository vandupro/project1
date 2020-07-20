var x = $('ul.list a');
var y = $('.content');
x.click(function(){
	y.toggle(500);
});
// document.getElementsByTagName('a');
// var content = document.getElementsByClassName('content');
// var a = document.getElementsByTagName('a');
// for(i = 0; i < a.length; i++){
//     a[i].onclick = function(){
//         // alert('abch')
//         content[i].style.display = "";
//     }
//     break;
// }
// var x = $('ul.list a');
// var y = $('.content');
// for(i = 0; i < x.length; i++){
//     x[i].click(function(){
//         alert('abcch')
//         y[i].toggle(400);
//     })
//     break;
// }