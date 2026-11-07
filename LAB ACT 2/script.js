const message = document.getElementById("message");

const changeMessageBtn = document.getElementById("changeMessageBtn");

const changeBgBtn = document.getElementById("changeBgBtn");


const messages = [
    "Hello! Welcome to our webpage.",
    "Our Group Members are Giovrei Mcgave Ortega, James Kirby Ignacio, Jimkyle Ronien Alvarez!",
];

let messageIndex = 0;


changeMessageBtn.addEventListener("click", function () {

    message.textContent = messages[messageIndex];

    messageIndex++;

    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }

});


const colors = [
    "lightblue",
    "lightpink",
    "lightgreen",
    "lightyellow",
    "lavender",
    "lightsalmon",
    "lightcyan",
    "peachpuff",
    "samuraipink"
];

let colorIndex = 0;


changeBgBtn.addEventListener("click", function () {

    document.body.style.backgroundColor = colors[colorIndex];

    colorIndex++;

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }

});
