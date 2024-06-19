$(document).ready(function() {
    $("#signup-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
        
        password:{
          required:true,
          
        //   pattern: /[a-z][A-Z][0-9]/
        // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/,

        
        minlength:8
         
        }
           
        },
        messages: {
            name: {
                required: "enter your name",
                minlength: "Name must be at least 2 characters"
            },
            
            password: {
                required: "enter the password",
                minlength: "enter at least 8 characters",
                // pattern:"require at least one lowercase ,one uppercase character and number"
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
 
  