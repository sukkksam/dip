const shot = document.querySelector('.shot');
const hit = document.querySelector('.hit');
const count = document.querySelector('.count strong');
let counter = 0;

document.body.addEventListener('click', playShotHandler);

function playShotHandler(e) {
    let el = e.target;
    if (el.classList.contains('beer')) {
        playHit();
        counter++;
        count.textContent = counter;
        el.classList.add('die');
        if (counter === 5) {
            setTimeout(replay, 400);
        }
    }
    playShot();
}

function playShot() {
    shot.pause();
    shot.currentTime = 0;
    shot.play();
}

function playHit() {
    hit.pause();
    hit.currentTime = 0;
    hit.play();
}

function replay() {
    document.querySelectorAll('.beer').forEach(function(item) {
        item.classList.remove('die');
    });
    counter = 0;
    count.textContent = counter;
}
