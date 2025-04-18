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
            <td align="center" onclick="Del('${key.id}')"><i class="fa-solid fa-trash"></i></td>
            <td onclick="Upd('${key.id}')"><i class="fa-solid fa-pen-to-square"></i></td>
            </tr>
    `
  }) 
}

let Del=(id)=>{

    let url=`http://localhost:3000/Hotels/${id}` 
    fetch(url,{method:"DELETE"})
  }


// let Details=()=>{

//     let inpname = document.querySelector('#name').value
//     let inpemail = document.querySelector('#email').value
//     let inpnum = document.querySelector('#mobile').value
//     let inpcount = document.querySelector('#country').value
//     let inpcheckin = document.querySelector('#checkin').value
//     let inpcheckout = document.querySelector('#checkout').value
//     let inptype = document.querySelector('#roomtype').value
//     let inproom = document.querySelector('#rooms').value
//     let inpperson = document.querySelector('#persons').value
//     let inpspecial = document.querySelector('#specialtreat').value


//     let  url="http://localhost:3000/Hotels"
//     fetch(url,{method:"POST",
//       headers:{
//           "Content-Type":"application/json"
//       },
//       body:JSON.stringify(
//       {
//           "name":inpname,
//           "email":inpemail,
//           "mobile":inpnum,
//           "country":inpcount,
//           "checkin":inpcheckin,
//           "checkout":inpcheckout,
//           "roomtype":inptype,
//           "rooms":inproom,
//           "persons":inpperson,
//           "specialtreat":inpspecial
//       })
//     })


//     Swal.fire({
//       title: "Booking Confirm",
//       icon: "success",
//       draggable: true

//     }).then((result) => {

//       location.href="./hotel.html"

//     })
// return false
// }

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
