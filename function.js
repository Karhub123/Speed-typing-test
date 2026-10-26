let quoteDisplay = document.getElementById("quoteDisplay");
let quoteInput = document.getElementById("quoteInput");
let timer = document.getElementById("timer");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let result = document.getElementById("result");
let spinner = document.getElementById("spinner");
let speedTypingTest = document.getElementById("speedTypingTest");
let counter = 0;
let interval;

function startTimer() {
    clearInterval(interval);
    counter = 0;
    timer.textContent = counter + " seconds";
    interval = setInterval(function() {
        counter = counter + 1;
        timer.textContent = counter + " seconds";
    }, 1000);
}

function getQuote() {
    spinner.classList.remove("d-none");
    speedTypingTest.classList.add("d-none");
    fetch("https://apis.ccbp.in/random-quote")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            quoteDisplay.textContent = data.content;
            spinner.classList.add("d-none");
            speedTypingTest.classList.remove("d-none");
            startTimer();
        });
}
submitBtn.onclick = function() {
    if (quoteInput.value === quoteDisplay.textContent) {
        clearInterval(interval);
        result.textContent = "You typed in " + counter + " seconds";
    } else {
        result.textContent = "You typed incorrect sentence";
    }
};
resetBtn.onclick = function() {
    result.textContent = "";
    quoteInput.value = "";
    getQuote();
};
getQuote();