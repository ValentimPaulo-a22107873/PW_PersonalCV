document.addEventListener("DOMContentLoaded", () => {
    const buttonGeral = document.querySelector('.button_geral');
    const buttonMusic = document.querySelector('.button_music');
    const buttonSports = document.querySelector('.button_sports');

    var geral = 1;
    var music = 1;
    var sports = 1;

                
    buttonGeral.addEventListener('click', () => {
        if(geral === 1){
            document.getElementById('post_geral').style.display = 'none';
            geral=0;
        } else{
            document.getElementById('post_geral').style.display = 'flex';
            geral=1;
        }
    });

    buttonMusic.addEventListener('click', () => {
        if(music === 1){
            document.getElementById('post_music').style.display = 'none';
            music=0;
        } else{
            document.getElementById('post_music').style.display = 'flex';
            music=1;
        }
    });

    buttonSports.addEventListener('click', () => {
        if(sports === 1){
            document.getElementById('post_sports').style.display = 'none';
            sports=0;
        } else{
            document.getElementById('post_sports').style.display = 'flex';
            sports=1;
        }
    });
})