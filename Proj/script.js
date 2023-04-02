function login(){
    uname = document.getElementById("uname").value; 
    pword = document.getElementById("pass").value; 
    console.log(uname +"\n"+ pword)

    if(uname == ""){

        console.log("Login Failed")

        if(pword == ""){
            document.getElementById("fail").innerHTML = "Please input a username and password";
        } else{
            document.getElementById("fail").innerHTML = "Please input a username";
        }
    } else if (pword == ""){
        
        console.log("Login Failed")
        document.getElementById("fail").innerHTML = "Please input a password";
    }
}