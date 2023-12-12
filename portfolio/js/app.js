let menu = document.querySelector(".menu");
let hamburgBtn = document.querySelector(".menu-icon");
let hamburgIcon = document.querySelector(".menu-icon i");
hamburgBtn.addEventListener("click" , function(){
  if(hamburgIcon.classList.contains("bi-list")){
    menu.style.right = "-16px"
    hamburgIcon.classList = "bi-x-lg"
  }else{
    menu.style.right = "-320px"
    hamburgIcon.classList = "bi-list"
  }
})