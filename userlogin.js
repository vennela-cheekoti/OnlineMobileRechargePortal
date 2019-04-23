function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "bearcat" && password == "bearcat"){
    alert ("Login successfully");
    window.location = "operators.html"; // Redirecting to other page.
    return false;
    }
    else{
        alert ("Login failed");
    }
}