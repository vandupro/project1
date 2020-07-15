$(document).ready(function() {
    $(window).scroll(function(event) {
       var pos_body = $('html,body').scrollTop();
       // console.log(pos_body);
       if(pos_body>20){
          $('.w3-top').addClass('co-dinh-menu2');
       }
       else {
          $('.w3-top').removeClass('co-dinh-menu2');
       }
       if(pos_body>12){
          $('.back-to-top').addClass('hien-ra');
       }
       else{
          $('.back-to-top').removeClass('hien-ra');
       }
    });
    $('.back-to-top').click(function(event) {
       $('html,body').animate({scrollTop: 0},1400);
    });
 });