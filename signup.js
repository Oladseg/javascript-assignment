const submit = () => {
    const username = document.getElementById("name").value. toLowerCase()
    const gender=document.querySelector("#gender").value
    const telephone= document.querySelector("#telephone").value
    const password = document.querySelector("#password").value
    const address = document.querySelector("#address").value
    const email = document.querySelector("#email").value
    if (password.length < 8 ) {
        alert("weak password");
    }
    // else if(password.length == 8){
    //     alert("strong password");
    else if (gender !== "male" && gender !== "female"){
alert("gender must be male or female")
    }
    else{
        alert("signup successful");
        console.table({name, gender, telephone, password, email, });
        window.location.href="login.html"
    }
   }
    
