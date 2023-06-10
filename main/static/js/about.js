document.addEventListener("DOMContentLoaded", () => {
    const buttonPrevious = document.querySelector('.button_previous');
    const buttonNext = document.querySelector('.button_next');

    var counter = 1;

                
    buttonNext.addEventListener('click', () => {
        if(counter === 1){
            document.querySelector('.text_welcome').style.display = 'none';
            document.querySelector('.text_education').style.display = 'flex';
            buttonPrevious.style.display = 'block';
        }
        if(counter === 2){
            document.querySelector('.text_education').style.display = 'none';
            document.querySelector('.text_skills').style.display = 'flex';
        }
        if(counter === 3){
            document.querySelector('.text_skills').style.display = 'none';
            document.querySelector('.text_hobbies').style.display = 'flex';
        }
        if(counter === 4){
            document.querySelector('.text_hobbies').style.display = 'none';
            document.querySelector('.text_course1').style.display = 'flex';
        }
        if(counter === 5){
            document.querySelector('.text_course1').style.display = 'none';
            document.querySelector('.text_course2').style.display = 'flex';
        }
        if(counter === 6){
            document.querySelector('.text_course2').style.display = 'none';
            document.querySelector('.text_course3').style.display = 'flex';
            buttonNext.style.display = 'none';
        }
        counter++;
    });

    buttonPrevious.addEventListener('click', () => {
        if(counter === 2){
            document.querySelector('.text_welcome').style.display = 'flex';
            document.querySelector('.text_education').style.display = 'none';
            buttonPrevious.style.display = 'none';
        }
        if(counter === 3){
            document.querySelector('.text_education').style.display = 'flex';
            document.querySelector('.text_skills').style.display = 'none';
        }
        if(counter === 4){
            document.querySelector('.text_skills').style.display = 'flex';
            document.querySelector('.text_hobbies').style.display = 'none';
        }
        if(counter === 5){
            document.querySelector('.text_hobbies').style.display = 'flex';
            document.querySelector('.text_course1').style.display = 'none';
        }
        if(counter === 6){
            document.querySelector('.text_course1').style.display = 'flex';
            document.querySelector('.text_course2').style.display = 'none';
        }
        if(counter === 7){
            document.querySelector('.text_course2').style.display = 'flex';
            document.querySelector('.text_course3').style.display = 'none';
            buttonNext.style.display = 'block';
        }
        counter--;
    });
})