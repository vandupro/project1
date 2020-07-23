//active
     var header = document.getElementById("myDIV");
     var btns = header.getElementsByClassName("btns");
     for (var i = 0; i < btns.length; i++) {
       btns[i].addEventListener("click", function() {
       var current = document.getElementsByClassName("active");
       current[0].className = current[0].className.replace(" active", "");
       this.className += " active";
       });
     }
     // <---------END active------>

     //              cuộn MENU
     window.onscroll = function () { scrollFunction() };

     function scrollFunction() {
       if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
         document.getElementById("header").classList.add("mystyle");

       } 
       if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("back-to-top").style.display = "block";

      } 
       else {
         document.getElementById("header").classList.remove("mystyle");
       }
     }
     // <---------END cuộn MENU------>
    //<<--------------back-to-top-------------->>
      $(document).ready(function ($) {
              $(window).scroll(function () {
                  var e = $(window).scrollTop();
                  if (e > 300) {
                      $(".btn-top").show()
                  } else {
                      $(".btn-top").hide()
                  }
              });
              $(".btn-top").click(function () {
                  $('body,html').animate({
                      scrollTop: 0
                  })
              })
      });
//<<--------------! END-back-to-top-------------->>


     //                    <!-- menu reposive -->

     //bật tắt sự kiện  bằng icon
     document.getElementById("fa-bars").onclick = function () {
        document.getElementById("home").classList.add("show");
        document.getElementById("header").classList.remove("mystyle");
      }
      document.getElementById("fa-times").onclick = function () {
        document.getElementById("home").classList.remove("show");
      }


//tắt sự kiện menu.
      var dem= document.getElementsByClassName("so1");
      for(var i = 0; i<dem.length;i++){
        dem[i].onclick= function () {
        document.getElementById("home").classList.remove("show");
      }
      
      } 

      //                     <!-- End menu reposive -->



      
    