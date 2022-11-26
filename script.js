$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu/navbar script

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });


});

const btn = document.getElementById('btn');

btn.addEventListener('click' , function handleClick(event) {
    event.preventDefault();

    const textInput = document.getElementById('text');
    console.log(textInput.value);
    textInput.value = '';
    

    const inputs = document.querySelectorAll('#first_name, #last_name, #email');

    inputs.forEach(input => {
        input.value = '';
    });
});