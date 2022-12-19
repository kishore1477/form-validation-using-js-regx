const formelm =  document.forms.myform
const email = formelm.email
const _name = formelm.name
const password = formelm.password

_name.addEventListener('blur', ()=>{
    console.log("_name is blurred");
    // Validate _name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = _name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your _name is valid');
        _name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log('Your _name is not valid');
        _name.classList.add('is-invalid');
        validUser = false;
        
    }
})

console.log("Email is", email)
console.log("fromElement",formelm)