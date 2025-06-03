let shot = document.querySelector('.shot'),
    hit = document.querySelector('.hit'),
    count = document.querySelector('.count strong'),
    counter = 0;

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
    shot.pause(); // Остановить звук, если он играет
    shot.currentTime = 0; // Вернуться к началу
    shot.play(); // Проиграть звук
}

function playHit() {
    hit.pause(); // Остановить звук, если он играет
    hit.currentTime = 0; // Вернуться к началу
    hit.play(); // Проиграть звук
}

function replay() {
    let died = document.querySelectorAll('.beer');
    died.forEach(function (item) {
        item.classList.remove('die');
    });
    counter = 0;
    count.textContent = counter;
}