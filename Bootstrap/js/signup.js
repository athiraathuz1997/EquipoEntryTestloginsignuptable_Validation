$(document).ready(function() {
    $("#signup-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                digits: true,
                minlength:10,
                maxlength:14
            },
            address: {
              required: true
            },
            dob:{
                required: true
            },
            gender:{
                required:true
            },
            username: {
                required: true
            },
            password:{
              required:true,
              minlength:8
            },
            confirm: {
                required: true,
                minlength:8,
                equalTo: "#password"
            }
        },
        messages: {
            name: {
                required: "Enter your name",
                minlength: "Name must be at least 2 characters"
            },
            email: {
                required: "Enter your email",
                email: "Enter a valid email address"
            },
            phone: {
                required: "Enter your phone number",
                digits: "Enter only digits",
                maxlength:"Invalid Number"
            },
            address: {
                required: "Enter your address"
            },
            username: {
                required: "Enter your username"
            }   
        },
        submitHandler: function(form) {
            form.submit();
        }  
    });
  
    
  
    $("#save").on("click", function(event) {
        if ($("#signup-form").valid()) {
            document.getElementById("signup-form").submit();
        }else{
            event.preventDefault();
        }
    });
  });