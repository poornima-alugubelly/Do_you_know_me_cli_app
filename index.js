var readlineSync = require("readline-sync");

 
var score = 0;

console.log("Hi This is Poornima");
var userName = readlineSync.question("What's your name ?  ");

console.log("Welcome " + userName + " let's see how well you know me");

var scoreBoard=[{
  name: "Tanay: ",
  score: 0,
},
{
  name: "Sanjana: ",
  score: 4,
}]

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Correct !");
    score = score + 1;
  }else
  {
    console.log("Wrong Answer");
  }

}



var questions = [{
    question: "Where do I live? ",
    answer: "Hyderabad"
},{
  question: "What's my fav movie? ",
  answer: "Parasite"
},{
 question: "Which sport do I like watching? ",
 answer: "Ice skating"
},{
  question: "How old am I? ",
  answer: "20"
  }] ;

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,
  currentQuestion.answer);
}

max=0
console.log("--------");
console.log("Your scored: ", score);

  for(var i=0;i<scoreBoard.length; i++){
   
         max =Math.max(scoreBoard[i].score, score);
  }
    console.log("Currently the highest score on this quiz is " + max);
    console.log("Please let me know if you score the highest ");
  