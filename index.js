let wishes = [
    "Желаю тебе радости и счастья в каждый новый день! 🌞", // 1
    "Пусть сегодня весь твой день будут наполнены улыбками 😄", // 2
    "Желаю тебе энергии и вдохновения, чтобы справиться со всеми задачами этого дня! 💪", // 3
    "Пусть каждый момент сегодня приносит тебе положительные эмоции! 😊", // 4
    "Желаю тебе найти красоту и вдохновение в окружающем мире 🌺", // 5
]
let button = document.querySelector(".button");
let phrase = document.querySelector(".phrase");

console.log(button)
button.addEventListener('click', function (){
    console.log("Kek")
    let randIndex = Math.floor(Math.random() * wishes.length);
    phrase.textContent = wishes[randIndex];
})
