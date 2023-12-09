let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".hamburg-menu_btn");
let menuBtnIcon = document.querySelector(".hamburg-menu_btn i");
let closeBtn = document.querySelector(".close-btn");
let closeBtnIcon = document.querySelector(".close-btn i");
menuBtn.addEventListener("click", function () {
  if (menuBtnIcon.classList.contains("bi-list")) {
    menu.style.right = "0";
    menuBtnIcon.classList = "bi-x-lg";
  } else {
    menu.style.right = "-288px";
    menuBtnIcon.classList = "bi-list";
  }
});