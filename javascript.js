  
let name = document.getElementById('fullname');
let email = document.getElementById('email');
let message = document.getElementById('message');
let send = document.getElementById('send');



// create an event listener on the button send

send.addEventListener('click', ()=>{
    if (name.value === '' && email.value === '' && message.value === '') {
        alert('Please fill out name, email and message fields before sending');
    } else if (name.value === '') {
        alert('Please fill out name field before sending');
    }  else if (email.value === '') {
        alert('Please fill out email field before sending');
    }  else if (message.value === '') {
        alert('Please fill out message field before sending');
    } else {
        alert(`Message successfully sent`);
    }

})