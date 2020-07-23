
    const menuBtn = document.querySelector(".checkbtn i");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const items = document.querySelector(".nav-items");
    const form = document.querySelector("form");

    menuBtn.onclick = function(){
      items.classList.add("active");
      menuBtn.classList.add("hide");
      searchBtn.classList.add("show");
      cancelBtn.classList.add("show");
    }
    cancelBtn.onclick = function(){
      items.classList.remove("active");
      menuBtn.classList.remove("hide");
      searchBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      form.classList.remove("active");
      cancelBtn.style.color = "#ff3d00";
    }