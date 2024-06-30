// NASCONDI ELEMENTI

document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('start-btn');
    const title = document.getElementById('title');
    const gridSection = document.getElementById('grid-section');
    const visualizer = document.getElementById('visualizer');

    startBtn.addEventListener('click', function () {
        title.style.display = 'none';
        startBtn.style.display = 'none';
        gridSection.style.display = 'block';
        visualizer.style.display = 'block';
    });

    // SECRET 
    setTimeout(function () {
        title.style.display = 'none';
        startBtn.style.display = 'none';
        gridSection.style.display = 'none';
        visualizer.style.display = 'none';
        message.style.display = 'block';
    }, 60000);
});



// FAI PARTIRE AUDIO 

const buttons = document.querySelectorAll('.grid-btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const soundId = button.getAttribute('data-sound');
        const audioElement = document.getElementById(soundId);
        audioElement.play();
    });
});



// VISUALIZER 

// Sarebbe carino inserire un visualizer 
// che in base al suono emesso dal sito cambi il suo grafico.

// Per una questione di tempo, è stato inserito un fake visualizer :(((

const video = document.getElementById('video');

video.addEventListener('ended', () => {
    video.currentTime = 0;
    video.play();
});
