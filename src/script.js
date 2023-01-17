const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('theForm');
const error1 = document.getElementById('error1');
const error2 = document.getElementById('error2');
const error3 = document.getElementById('error3');
const error4 = document.getElementById('error4');

form.addEventListener('submit', (e) => {
    let error = false;

    if (fname.value === '' || fname.value == null){
        fname.style.boxShadow = " inset 0 0.1rem 0.5rem 0.1rem red";
        error1.innerHTML = "*required field.";
        error = true;
        e.preventDefault()
    }
    else{fname.style.boxShadow = " inset 0 0.1rem 0.5rem 0.1rem green"; error1.innerHTML = null;}
    
    
    if (lname.value === '' || lname.value == null){
        lname.style.boxShadow = " inset 0 0.1rem 0.5rem 0.1rem red";
        error2.innerHTML = "*required field.";
        error = true;
        e.preventDefault()
    }
    else{lname.style.boxShadow = " inset 0 0.1rem 0.5rem 0.1rem green"; error2.innerHTML = null;}
    
    
    if (email.value === '' || email.value == null){
        email.style.boxShadow = " inset 0 0.1rem 0.5rem 0.1rem red";
        error3.innerHTML = "*required field.";
        error = true;
        e.preventDefault()
    }
    else{email.style.boxShadow = " inset 0 0.1rem 0.5rem 0.1rem green"; error3.innerHTML = null;}
    
    
    if (message.value === '' || message.value == null){
        error4.innerHTML = "*required field.";
        message.style.boxShadow = " inset 0 0.1rem 0.5rem 0.1rem red";
        error = true;
        e.preventDefault()
    }
    else{message.style.boxShadow = " inset 0 0.1rem 0.5rem 0.1rem green"; error4.innerHTML = null;}
    
    
    if (!error){
        fname.style.boxShadow = " inset 0 0.1rem 0.5rem 0.1rem green";
        lname.style.boxShadow = " inset 0 0.1rem 0.5rem 0.1rem green";
        email.style.boxShadow = " inset 0 0.1rem 0.5rem 0.1rem green";
        message.style.boxShadow = " inset 0 0.1rem 0.5rem 0.1rem green";
        alert("Submission Successful");
    }
})