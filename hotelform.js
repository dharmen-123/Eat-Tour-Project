let Hoteldata=async()=>{

    let url1="http://localhost:3000/Hotels"

    let response= await fetch(url1 ,{method:"GET"})

    let data1=await response.json()

    console.log(data1);

 let  datashow = document.querySelector('#showtable');
    data1.map((key)=>{ 
    datashow.innerHTML+=`
          <tr>
            <td>${key.name}</td>
            <td>${key.email}</td>
            <td>${key.mobile}</td>
            <td>${key.country}</td>
            <td>${key.checkin}</td>
            <td>${key.checkout}</td>
            <td>${key.roomtype}</td>
            <td>${key.rooms}</td>
            <td>${key.persons}</td>
            <td>${key.specialtreat}</td>
            <td>${key.persons*500*key.rooms}</td>
            <td align="center" onclick="confirmdel('${key.id}')"><i class="fa-solid fa-trash"></i></td>
            <td onclick="Upd('${key.id}')"><i class="fa-solid fa-pen-to-square"></i></td>
            </tr>
    `
  }) 
}

let confirmdel=(id)=>{

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      }).then(()=>{
        Del(id)
      })
    }
  });

}

let Del=(id)=>{
 
      let url=`http://localhost:3000/Hotels/${id}` 
      fetch(url,{method:"DELETE"})

   
  }

  let Upd=async(id)=>{

    let url=`http://localhost:3000/Hotels/${id}`
    let res = await fetch(url,{method:"GET"})
 
    let data=await res.json()
    console.log(data);
    let updform = document.querySelector('#updformnew')
        updform.innerHTML = `
        <div id="maindiv">
          <div class="booking-container">
    <h1>BOOK A ROOM</h1>
    <div class="form-wrapper">
      <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80" alt="Room" class="room-img" />
      
      <form class="booking-form" >
        <div class="form-row">
          <input type="text" id="upname"  placeholder="Username" value="${data.name}"/>
          <input type="text" id="upemail"  placeholder="example@email.com" value="${data.email}"/>
        </div>
        <div class="form-row">
          <input type="text" id="upmobile"  placeholder="Phone Number" value="${data.mobile}"/>
          <input type="text" id="upcountry" placeholder="City"  value="${data.country}"/>
        </div>
        <div class="form-row">
          <div>
          <h2>Check in date</h2>
          <input type="date" id="upcheckin"  placeholder="Check In" value="${data.checkin}"/>
        </div>
        <div>
          <h2>Check out date</h2>
          <input type="date" id="upcheckout" placeholder="Check Out" value="${data.checkout}" />
        </div>
        </div>
        <div class="form-row">
          <select  id="uproomtype"  value="${data.roomtype}">
            <option disabled selected>Room Type</option>
            <option>Simple</option>
            <option>Deluxe</option>
            <option>Standard</option>
            <option>Suite</option>
          </select>
          <input type="number" id="uprooms" placeholder="No. of Rooms" value="${data.rooms}">
        </div>
        <div class="form-row">
          <input type="number" id="uppersons" placeholder="No. of person" value="${data.persons}">
          <select id="upspecialtreat" value="${data.specialtreat}">
            <option disabled selected>Special Treatment</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <button type="submit" onclick="return Finalupd('${data.id}')">Book Now!</button>
      </form>     
      
    </div>
    <footer>@ 2025 Book a Room. All rights reserved |</footer>
  </div>
  </div>
    `
 }

let Finalupd=(id)=>{
      
  let name = document.getElementById("upname").value;
  let email = document.getElementById("upemail").value;
  let mobile = document.getElementById("upmobile").value;
  let country = document.getElementById("upcountry").value;
  let checkin = document.getElementById("upcheckin").value;
  let checkout = document.getElementById("upcheckout").value;
  let roomtype = document.getElementById("uproomtype").value;
  let rooms = document.getElementById("uprooms").value;
  let persons = document.getElementById("uppersons").value;
  let specialtreat = document.getElementById("upspecialtreat").value;

  let  url=`http://localhost:3000/Hotels/${id}`
  fetch(url,{method:"PUT",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(
    {
        "name":name,
        "email":email,
        "mobile":mobile,
        "country":country,
        "checkin":checkin,
        "checkout":checkout,
        "roomtype":roomtype,
        "rooms":rooms,
        "persons":persons,
        "specialtreat":specialtreat
    })
  })
  Swal.fire({
    title: "Booking Confirm",
    icon: "success",
    draggable: true

  }).then((result)=>{
    location.href="./hotel.html";

  })
  return false

}

let Details=()=>{

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let country = document.getElementById("country").value;
  let checkin = document.getElementById("checkin").value;
  let checkout = document.getElementById("checkout").value;
  let roomtype = document.getElementById("roomtype").value;
  let rooms = document.getElementById("rooms").value;
  let persons = document.getElementById("persons").value;
  let specialtreat = document.getElementById("specialtreat").value;

  if (name === "" || email === "" || mobile === "" || country === "" || checkin === "" || checkout === "" || roomtype === "Room Type" || rooms === "" || persons === "" || specialtreat === "Special Treatment") {
      Swal.fire({
          icon: "error",
          title: "Incomplete Form",
          text: "Please fill all the fields before booking!",
          confirmButtonColor: "#ff0000"
      });
      return false;
  }

  if (!validateEmail(email)) {
      Swal.fire({
          icon: "error",
          title: "Invalid Email",
          text: "Please enter a valid email address!",
          confirmButtonColor: "#ff0000"
      });
      return false;
  }

  if (!validatePhone(mobile)) {
      Swal.fire({
          icon: "error",
          title: "Invalid Phone Number",
          text: "Please enter a valid phone number!",
          confirmButtonColor: "#ff0000"
      });
      return false;
  }
  
  let  url="http://localhost:3000/Hotels"
  fetch(url,{method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(
    {
        "name":name,
        "email":email,
        "mobile":mobile,
        "country":country,
        "checkin":checkin,
        "checkout":checkout,
        "roomtype":roomtype,
        "rooms":rooms,
        "persons":persons,
        "specialtreat":specialtreat
    })
  })

  // Success alert
  Swal.fire({
    title: "Booking Confirm",
    icon: "success",
    draggable: true

  }).then((result)=>{
    location.href="./hotel.html";

  })

  return false;
};

function validateEmail(email) {
  let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
function validatePhone(phone) {
  let re = /^[6-9]\d{9}$/;
  return re.test(phone);
}
