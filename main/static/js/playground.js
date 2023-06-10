document.addEventListener("DOMContentLoaded", () => {

    document.querySelector('.date').innerHTML = Date();


    document.querySelector('.image_button').onclick = function(){

    document.getElementById('text_image').innerHTML = document.getElementById('image_text').value;
    document.getElementById('image_text').value = "";
    }   


    var counter = 0;
    const value = document.querySelector('.troll')

    function troll(){
        
        if(counter === 0){
            value.innerHTML = "TIRA JÁ O MOUSE";
            value.style.fontSize = '20px';
            counter++;
        }

        if(counter === 2){
            value.innerHTML = "TIRAAAAAAAA";
            value.style.fontSize = '23px';
            counter++;
        }

        if(counter === 4){
            value.innerHTML = "cansei-me brinca para aí";
        }
    }

    function troll2(){
        
        if(counter === 1){
            value.innerHTML = "Obrigado";
            value.style.fontSize = '15px';
            counter++;
        }

        if(counter === 3){
            value.innerHTML = "chato pá";
            value.style.fontSize = '15px';
            counter++;
        }
    }


    document.querySelector('.text_button').onclick = function(){

        const name = document.getElementById('name_text').value;

        document.getElementById('hidden_text1').innerHTML = `Hi, ${name}!`;
        document.getElementById('hidden_text2').innerHTML = `I really hope that you are enjoying my webiste ${name}!`;
        document.getElementById('hidden_text3').innerHTML = `Remember to contact me ${name}, if you want to know anything :D`;
    }


})




