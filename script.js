// $(document).ready(function(){
//     $(window).scroll(function(){
//         if(this.scrollY > 20){
//             $('.navbar').addClass("sticky");
//         }else{
//             $('.navbar').removeClass("sticky");
//         }
//     });
    // toggle menu/navbar script

//     $('.menu-btn').click(function(){
//         $('.navbar .menu').toggleClass("active");
//         $('.menu-btn i').toggleClass("active");

//     });


// });

const form =document.getElementById('my_form')

form.addEventListener('submit', function handleSubmit(event){
    event.preventDefault();

    form.reset();
})

const btn =document.getElementById('btn');

btn.addEventListener('click', function handleClick(event){
    event.preventDefault();

    const inputs = document.querySelectorAll('#firstname, #lastname, #email, #message');

    inputs.forEach(input => {
        input.value = '';
    });
});
    


// document.addEventListener("DOMContentLoaded", function(){
//     fields.firstname = document.getElementById('firstname');
//     fields.lastname = document.getElementById('lastname');
//     fields.email = document.getElementById('email');
//     fields.message = document.getElementById('message');
// })

// function isNotEmpty(value) {
//     if (value == null || typeof value == 'undefined') return false;

//     return (value.length > 0);
// }

// function isEmail(email) {
//     let regex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/;
//     return regex.test(String(email).toLowerCase());
// }

// function fieldValidation(field, validationFunction) {
//     if (field == null) return false;

//     let isFieldValid = validationFunction(field.value)
//     if(!isFieldValid) {
//         field.className='placeholderRed'
//     }else {
//         field.className= '';
//     }

//     return isFieldValid;
// }

// function isValid() {
//     var valid = true;

//     valid &= fieldValidation(fields.firstname, isNotEmpty)
//     valid &= fieldValidation(fields.lastname, isNotEmpty)
//     valid &= fieldValidation(fields.email, isEmail)
//     valid &= fieldValidation(fields.message, isNotEmpty)

//     return valid;
// }

// class User {
//     constructor(firstName, lastName, email, message) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.message = message;
//     }
// }

// function sendContact() {
//     if (isValid()) {
//         let usr = new User(firstName.value, lastName.value, email.value, message.value);

//         alert(`${user.firstName} thanks for contacting us`)
//     } else {
//         alert("There was an error")
//     }
// }