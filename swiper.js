AOS.init();
    //  Footer part js 
document.getElementById("subscribe-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for subscribing!");
});
    
// Swiper part JS 
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});





function bookhotel(){
  location.href="./Trail.html"
}

var swiper1 = new Swiper(".mySwiper2", {
  effect: "cards",
  grabCursor: true,
});
    



