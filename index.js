var readlineSync = require("readline-sync");
console.log("Hi This is Poornima");
var userName = readlineSync.question("What's your name ?  ");
console.log("Welcome " + userName + " let's see how well you know me");

var scoreBoard=[{
      name: "Apoorva: ",
      score: 1,
    },
    {
      name: "Sanjana:",
      score: 3,
  }
]

var score = 0;

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){

    console.log("Your answer is correct ✅");
    score = score + 1;
  }
  else
  {
    console.log("Bzzztt Wrong Answer ❌");
  }

  console.log( "Your current score is "+ score);

}



var questions = [{
    question: "Where do I live? ",
    answer: "Hyderabad"
  },
  {
    question: "What's my fav movie? ",
    answer: "Parasite"
  },
  {
    question: "What's my fav dish? ",
    answer: "Biryani"
  },
  {
  question: "How old am I? ",
  answer: "21"
  },
question: "What's my favourite band?",
answer: "BTS"
] ;

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,
  currentQuestion.answer);
}


console.log("-------------");
console.log("You scored: ", score);

var max=0;

for(var i=0;i<scoreBoard.length-1; i++){
     max = Math.max(scoreBoard[i].score,scoreBoard[i+1].score)
  } 
console.log("Currently the highest score on this quiz is " + max);

if(score>=max){
    console.log("Congratulations! You have achieved the highest score 🔥")
    console.log("Please send me a screen shot!")
  }

  else{
    console.log("Missed it by " + (max-score) + " points 😔")
  }

  
