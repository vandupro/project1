var x = $('ul.list li');
var y = $('.content');
x.click(function(){
	
	$(this).children('.content').toggle(500);
	$(this).find('i').toggleClass('fa-plus');
});
