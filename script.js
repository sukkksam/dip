const countElem = document.querySelector('.count strong');
const beers = document.querySelectorAll('.beer');
const shotSound = document.querySelector('.shot');
const hitSound = document.querySelector('.hit');
const aim = document.querySelector('.aim');

let score = 0;

document.querySelector('.table').addEventListener('click', (e) => {
    if (e.target.classList.contains('beer')) {
        // Воспроизвести звук попадания
        hitSound.currentTime = 0;
        hitSound.play();

        // Обновить счет
        score++;
        countElem.textContent = score;

        // Анимация попадания
        e.target.classList.add('hit');

        // Удалить банку через короткое время
        setTimeout(() => {
            e.target.remove();
        }, 300);
    }

    // Воспроизвести выстрел
    shotSound.currentTime = 0;
    shotSound.play();
});

// Обновление положения прицела по движению мыши
document.addEventListener('mousemove', (e) => {
    aim.style.left = e.pageX + 'px';
    aim.style.top = e.pageY + 'px';
});
