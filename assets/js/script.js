// variables for timer
// var reference elements on HTML
var timer = 60;
var timerEl = document.getElementById("timer");

// timer to start quiz with countdown by 1 seccond
function startQuiz() {
    var startTimer = setInterval(function() {
        timer--
        timerEl.textContent = timer + "seconds left"
        if (timer === 0) {
            clearInterval(startTimer);
        }
    }, 1000)
}
// quiz questions, answer, and choices array
var questionsArr = [{
    questions: "blah blah blah",
    answer: "blah blah",
    choices:["answer choices"]
},
{
    questions: "blah blah blah",
    answer: "blah blah",
    choices:["answer choices"]
},
{
    questions: "blah blah blah",
    answer: "blah blah",
    choices:["answer choices"]
},
{
    questions: "blah blah blah",
    answer: "blah blah",
    choices:["blah blah"]
}]    