const login = () => {
    const username = document.getElementById("username").value. toLowerCase()
    const password = document.querySelector("#password").value
    if (password.length < 8 ) {
        alert("incorrect username or password");
    }
    else{
        alert("login successfully");
        console.table({username, password, });
        window.location.href="profile.html"
    }
   }