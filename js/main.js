const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});
function checkInputs() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();


    if(nameValue === '') {

        setErrorFor(name, 'Имя не заполнено')
    } else {
        setSuccessFor(name)
    }

    function setErrorFor(input, message) {
        const req = input;
        req.className = 'error booking__form-item';
    }
}

$(function(){

    $('.galerie__slider').slick({
        dots: true,
        initialSlide: 1,
        arrows: false
        
    });

    $('.tab').on('click', function(e){
            e.preventDefault();

            $($(this).siblings()).removeClass('tab--active');
            $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');
    
            $(this).addClass('tab--active');
            $($(this).attr('href')).addClass('tabs-content--active');

        })

        $('.nav__btn').on('click', function(){
            $('.nav__btn').toggleClass('nav__btn--active');
            $('.header__items').toggleClass('header__items--active');
        });

});


