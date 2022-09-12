function loginFunction(){
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
        
    if(userName === "testuser" && password === "testpassword"){
        var loginForm = document.getElementById("loginForm");
        loginForm.style.display = "none";

        var loader = document.getElementById("loaderPacifier");
        loader.style.display = "block";     
      
		setTimeout(function(){

        let currentURL = window.location.href; 
        let newURL = currentURL.replace("index.html", "Home.html");
        window.location.href = newURL;
		}, 10000);
     
    }
    else{
        var errorMessage = document.getElementById("invalidCredentials");
        errorMessage.style.display = "block"
    };

 
    
};
