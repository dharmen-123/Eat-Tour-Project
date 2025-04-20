function Searchf(){
    Swal.fire({
        icon: "error",
        title: "Sorry",
        text: "Flights are not Availble for this route",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      
}


document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    
    let form = event.target;
    let from = form.from.value.trim();
    let to = form.to.value.trim();
    let departureDate = form.departure_date.value;
    let departureTime = form.departure_time.value;
    let adults = form.adults.value;
    let phone = form.phone.value;
    let email = form.email.value;
  
    if (from === "" || to === "" || departureDate === "" || departureTime === "" || adults === "" || phone === "" || email === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all required fields!"
      });
      return;
    }
  
    if (!/^\d{10}$/.test(phone)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Phone Number",
        text: "Phone number should be 10 digits long!"
      });
      return;
    }
  
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Enter a valid email address!"
      });
      return;
    }
  
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Your flight booking request has been submitted!"
    }).then(() => {
      form.submit();
    });
  });
  
  document.getElementById("bookingForm").addEventListener("reset", function () {
    Swal.fire({
      icon: "info",
      title: "Form Reset",
      text: "All inputs have been cleared!"
    });
  });