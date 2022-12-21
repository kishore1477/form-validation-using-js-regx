const msg = document.getElementsByClassName('msg')
var msgg = document.getElementById('msgg')
 
 
 var name1 = document.getElementById('name')
 var  email = document.getElementById('email')
 var  password = document.getElementById('password')
 var  phone = document.getElementById('phone')
 let validEmail = false;
 let validPhone = false;
 let validName = false;
 let validPassword = false;
 
name1.addEventListener('input', (e)=>{
 
var msgg = document.getElementById('msgg')
msgg.innerHTML = ""
    
    // Validate _name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z\s]){2,10}$/;
    let str =  e.target.value;
    
    
    name1.classList.remove('invalid');
    
    if(str.length > 0 ){

   
    if(regex.test(str)){
        validName = true;
        
        msgg.innerHTML = ""
        name1.classList.remove('invalid');
       
    }
    else{
        // 
        validName = false
        if(str.length> 10){
            msgg.innerHTML = "maximum 10 letters are allowed";
           

        }else{

            msgg.innerHTML = " name should be 3-10 letters, Example:  name123"
        }
 
        name1.classList.add('invalid');
         
        
    }
}else{
       
}
})
phone.addEventListener('blur', (e)=>{
 
var msgg = document.getElementById('msggPhone')
msgg.innerHTML = ""
    
    // Validate _name here
    let regex =  /^(\d{03})([0-9])/;
    let str =   e.target.value;
    console.log("Phone: " , str)
    
    phone.classList.remove('invalid');
    
    if(str.length > 0 ){

        phone.classList.remove('invalid');
    if(regex.test(str)){
        console.log("Match")
        validPhone = true
        // 
        msgg.innerHTML = ""
        phone.classList.remove('invalid');
        
    }
    else{
        validPhone = false
        console.log(" not Match")
        // 
        if(str.length> 11){
            msgg.innerHTML = "Phone must be 11 numbers";

            phone.classList.add('invalid');
        } else{
            msgg.innerHTML = "Phone must start with 03 and must be 11 numbers";
            phone.classList.add('invalid');
        }
       
        
    }
}else{
       
}
})
email.addEventListener('blur', (e)=>{
 
var msgg = document.getElementById('msgEmail')
msgg.innerHTML = ""
    
    // Validate _name here
    let regex =  /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str =  email.value;
    
    
    email.classList.remove('invalid');
    console.log("Email", str)
    if(str.length > 0 ){

   
    if(regex.test(str)){
        validEmail = true
        console.log("Valid email", validEmail)
        msgg.innerHTML = ""
        email.classList.remove('invalid');
        
    }
    else{
        validEmail = false
        if(str.length> 30){
            msgg.innerHTML = "maximum 30 letters are allowed";

        }else{

            msgg.innerHTML = " email  should be valid, Example:   example@example.com"
        }
 
        email.classList.add('invalid');
         
        
    }
}else{
       
}
})
password.addEventListener('blur', (e)=>{
 
var msgg = document.getElementById('msgPassword')
msgg.innerHTML = ""
    
    // Validate _name here
    let regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    let str =  e.target.value;
    
    
    if(str.length === 0){
        password.classList.remove('invalid');

    }
    
    if(str.length > 0 ){

   
    if(regex.test(str)){
        validPassword = true;
        
        // 
        msgg.innerHTML = ""
        password.classList.remove('invalid');
        
    }
    else{
        validPassword = false
        if(str.length> 8){
            msgg.innerHTML = "maximum 8 letters are allowed";

        }else{

            msgg.innerHTML = " password  should be valid, Example:  password"
        }
       if(str.length > 8){
            msgg.innerHTML = "maximum 8  characters are allowed";
            password.classList.add('invalid');

        }else{
            msgg.innerHTML = "must contain at least 1 lower, 1 upper,1 number and 1 special characters"
 
            password.classList.add('invalid');
       }

           
         
        
    }
}else{
       
}
})
let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
     
    console.log(validEmail,  validName, validPhone , validPassword);
    
    // Submit your form here
    var failure = document.getElementById('failure');
    console.log("f", failure)
    var success = document.getElementById('success');
    console.log("s", success)
    if(validEmail &&  validName && validPhone && validPassword){


        name1.value= ''
        email.value = ''
        password.value = ''
        phone.value = ''

        console.log('Phone, email and user are valid. Submitting the form');
        success.classList.add('success');
        success.innerHTML ="Form submitted successfully.";
        failure.classList.remove('failure');
        failure.innerHTML = ""
        
        validEmail = false
        validName = false
        validPhone = false
        validPassword = false
        
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
         
        success.classList.remove('success');
        failure.classList.add('failure');
        failure.innerHTML ="Form  not submitted successfully.";
        success.innerHTML = ""
        
        }

    
    
})