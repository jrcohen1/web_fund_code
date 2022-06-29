var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

var answerHTML = document.querySelector("#answer");
var eightBall = document.querySelector("#ball");

function randomNumber(){
    return Math.floor(Math.random() * 20);
}

function getAnswer() {
    eightBall("ball.gif");
    var answer = lifesAnswers[randomNumber()];
    console.log(answer);
    return answer; 
}

function replace() {
    var answer = setTimeout();
    answerHTML.innerHTML = answer;
    return 0;
}
