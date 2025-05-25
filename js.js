let startBtn = document.getElementById("startBtn");
let intro = document.getElementById("start");
let cards = document.getElementById("cards");
startBtn.addEventListener("click", function () {
    intro.style.display = "none";
    cards.style.display = "flex";
});