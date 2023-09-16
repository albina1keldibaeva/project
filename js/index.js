document.querySelector(".burger-lines").addEventListener("click", () => {
    document.querySelector(".burger-menu").classList.toggle("active");
});


var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
