// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 40,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




function validateForm(event) {
  event.preventDefault();
  const form = document.getElementById('holidayForm');
  const fields = ['departing', 'nights', 'destination', 'people', 'leaving'];
  let valid = true;fields.forEach(field => {
const input = document.getElementById(field);
if (!input.value) {
  input.style.borderColor = 'red';
  valid = false;
} else {
  input.style.borderColor = '#ccc';
}
});

if (valid) {
  Swal.fire({
    title: "Holidays serach succesfully",
    icon: "success",
    draggable: true

  });
form.reset();
} else {
  Swal.fire({
    icon: "error",
    title: "Incomplete Form",
    text: "Please fill all the fields before booking!",
    confirmButtonColor: "#ff0000"
});
}
}
