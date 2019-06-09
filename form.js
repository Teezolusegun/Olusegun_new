let attempt = 3;


// function that validate the click button
function validate(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username == "admin" &&  password ==  "admin1234" ){
        alert("login successfully")
        window.location = "display/display.html"
       
        return false
    }else {
        attempt --
        alert(` you have left   ${attempt}  left`)
         
        
        //disable with three attempt
     if (attempt == 0){

        document.getElementById("username").disabled = true
        document.getElementById("password").disabled = true
        document.getElementById("submit").disabled = true
        return false
     }
    }
}
