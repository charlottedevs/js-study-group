var arrayOfQuotes = [
    "Hello There",
    "Do or do not, there is no try",
    "Wow, another quote",
    "Look at me, I'm manipulating the DOM"
];

var button = document.getElementById("button");
var header = document.getElementById("header");

function getRandomQuote() {
    header.innerHTML = arrayOfQuotes[Math.floor(Math.random() * arrayOfQuotes.length)];
};

button.addEventListener("click", getRandomQuote);

