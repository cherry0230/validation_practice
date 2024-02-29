 
 let nameError = document.getElementById("name-error");
 let phoneError = document.getElementById("phone-error");
 let emailError = document.getElementById("email-error");
 let messageError = document.getElementById("message-error");
 let submitError = document.getElementById("submit-error");

 function validateName(){
    let name = document.getElementById("user-name").value;


    if(name.length === 0){
        nameError.innerHTML = '*Name is required'
        return false;
    }
    if(!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
        nameError.innerHTML = 'Write FullName*'
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
    
 }

 function validatePhone(){
      let phone =  document.getElementById('phone-num').value;

        if(phone.length == 0){
            phoneError.innerHTML = '*PhoneNo is required'
            return false;
        }
        if(phone.length !== 10 || phone.length > 10){
            phoneError.innerHTML = 'Phone no should be 10 digits*'
            return false;
        }
        if(!phone.match(/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/)){
            phoneError.innerHTML = 'Only digits*'
            return false;
        }

        phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
            return true;

 }


 function validateEmail(){
    let email =document.getElementById('email-id').value;

    if(email.length == 0){
        emailError.innerHTML = '*Email is required*'
        return false;
    }
    if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)){
        emailError.innerHTML = '*Email invalid'
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
    
 }


 function validateText(){
    let text = document.getElementById('text-id').value;
    let req = 30;
    let left = req - text.length;

    if(text.length == 0){
        messageError.innerHTML = '*This area is required'
        return false;
    }

    if(left > 0){
        messageError.innerHTML = `${left} more characters required`
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;

 }




