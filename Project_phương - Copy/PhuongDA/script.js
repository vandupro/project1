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

       } else {
         document.getElementById("header").classList.remove("mystyle");
       }
     }
     // <---------END cuộn MENU------>


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