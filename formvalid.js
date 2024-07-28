$(document).ready(function(){
    $(".input-1").click(function(){
        $(".hr-1").css("border-color","black");
        $("#mobile").css("color","blueviolet");
    });
    
    $(".login-button").click(function(){
        $(".hr-1").css("border-color","rgb(194, 187, 187)");
        $("#mobile").css("color","grey");
        
        var mobile = $(".input-1").val();
        var mobileCheck = /^[0-9]{10}$/; // Adjust regex as per your mobile number format

        if(mobile == ""){
            $(".hide").text("Enter your mobile number");
            return false;
        } else if(!mobile.match(mobileCheck)){
            $(".hide").text("Enter a valid mobile number");
            return false;
        } else {
            $(".hide").text("");
        }
    });
    
    $(".hide,.hide-1,.first-name-hide,.last-name-hide,.email-hide,.password-signup-hide,.confirm-password-signup-hide").css("color","red");

    $(".sign-up").click(function(){
        $(".hide-me").css("display","none");
        $(".show-me").css("display","block");
        $(".form").css("height","188vh");
    });

    $(".login-page").click(function(){
        $(".show-me").css("display","none");
        $(".hide-me").css("display","block");
        $(".form").css("height","135vh");
    });

    $(".signup-button").click(function(){
        var lastname = $(".last-name").val();  
        var firstname = $(".first-name").val(); 
        var email = $(".email").val();
        var password = $(".password-signup").val();
        var confirmPassword = $(".confirm-password-signup").val();
        var nameCheck = /^[a-zA-Z\s]+$/;
        var emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        // firstname validation
        if(firstname == ""){
            $(".first-name-hide").text("Enter your name");
            return false;
        } else if(!firstname.match(nameCheck)){
            $(".first-name-hide").text("Enter a valid name");
            return false;
        } else if(firstname.length > 20){
            $(".first-name-hide").text("More than 20 char. is not allowed");
            return false;
        } else {
            $(".first-name-hide").text("");
        }

        // lastname validation
        if(lastname == ""){
            $(".last-name-hide").text("Enter your name");
            return false;
        } else if(!lastname.match(nameCheck)){
            $(".last-name-hide").text("Enter a valid name");
            return false;
        } else if(lastname.length > 20){
            $(".last-name-hide").text("More than 20 char. is not allowed");
            return false;
        } else {
            $(".last-name-hide").text("");
        }

        // email validation
        if(email == ""){
            $(".email-hide").text("Enter your email id");
            return false;
        } else if(!email.match(emailCheck)){
            $(".email-hide").text("Enter a valid email id");
            return false;
        } else {
            $(".email-hide").text("");
        }

        // password validation
        if(password == ""){
            $(".password-signup-hide").text("Enter your password");
            return false;
        } else {
            $(".password-signup-hide").text("");
        }

        // confirm password validation
        if(confirmPassword == ""){
            $(".confirm-password-signup-hide").text("Enter your password");
            return false;
        } else if(confirmPassword != password){
            $(".confirm-password-signup-hide").text("Passwords do not match");
            return false;
        } else {
            $(".confirm-password-signup-hide").text("");
        }
    });
});
