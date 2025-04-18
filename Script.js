let Loginsection = document.querySelector('#Loginsection');
Loginsection.style.display="none";
logcontainer = document.querySelector('.login-container')
function Cross(){
    Loginsection.style.display="none"
    return false;
}

setTimeout(()=>{Loginsection.setAttribute("style","display:block, display: flex;width: 100%;height: 100vh;justify-content: center;align-items: center;")}
        ,8000)

function sinup()
{
    let spname=document.querySelector('#uname').value
    let spass=document.querySelector('#upass').value

    if(spname=="")
    {
        alert("Enter username")
        document.querySelector('#uname').focus()
        return false
    }
    else if(spass=="")
        {
            alert("Enter password")
            document.querySelector('#upass').focus()
            return false
        }
    

    else if(!(spass.match(/[#@_]/)))
    {
        alert("Please use special characters")
        document.querySelector('#upass').focus()
        return false
    }
        localStorage.setItem("username",spname)
        localStorage.setItem("password",spass)
        
      
location.href="./login.html"
return false

}



function logine()
{
    let lgname=document.querySelector('#lgname').value
    let lgpass=document.querySelector('#lgpass').value
 
    let name=localStorage.getItem("username")
    let password=localStorage.getItem("password")
    console.log(name,password);
     
    if(lgname==name && lgpass==password)
    {
        Swal.fire({
            title: "Login Successful!",
            icon: "success",
            draggable: true

          }).then((result) => {

            location.href="./index.html"

          })
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
    return false
}

// Flight Page JavaScript is start from here 



