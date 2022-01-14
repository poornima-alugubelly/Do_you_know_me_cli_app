const readlineSync = require("readline-sync");
console.log("Hi This is Poornima");
const playerName = readlineSync.question("What's your name ?  ");
console.log(`Welcome ${playerName} let's see how well you know me`);

const scoreBoard=[
  {
    name: "Teju",
    score: 5
  },
  {
    name: "Hari",
    score:4
  },
  {
      name: "Apoorva",
      score: 2,
    },
    {
      name: "Sanjana",
      score: 2,
  }
  ]

let playerScore = 0;

const play = (ques,ans) => {

  
   let playerAnswer = readlineSync.question(ques);
 
    if(playerAnswer.toUpperCase() === ans.toUpperCase()){

    console.log("Your answer is correct ✅");
    playerScore = playerScore + 1;
  }
  else
  {
    console.log("Bzzztt Wrong Answer ❌");
  }

  console.log( "Your current score is "+ playerScore);

}

const questions = [{
    question: "Where do I live? \n A) Chennai \n B)  Delhi \n C) Hyderabad \n",
    answer: "c"
  },
  {
    question: "What's my fav movie?\n A) Wall-E \n B) Mean Girls \n C) Parasite \n ",
    answer: "c"
  },
  {
    question: "What's my fav dish?\n A) Shawarma \n B) Chicken Biryani \n C) Mandi \n ",
    answer: "b"
  },
  {
  question: "What's my fav pastime? \n A) Reading \n B) Running \n C) Painting \n ",
  answer: "a"
  },
  {question: "What's my favourite band? \n A) AC/DC \n B) BTS \n C) 1D \n",
  answer: "b"
  }
];

questions.forEach(currentQnA => play(currentQnA.question,currentQnA.answer))

console.log("-------------");
console.log(`You scored ${playerScore} points`);

let maxScore=0;
//calc highest score currently
scoreBoard.forEach(player => {
             maxScore = player.score>maxScore? player.score : maxScore 
               }
             )
console.log("Currently the highest score on this quiz is " + maxScore);

 
if(playerScore>=maxScore){
    console.log("Congratulations! You have achieved new high score 🔥")
    console.log("Please send me a screen shot!")
  }

  else{
    console.log("You missed it by " + (maxScore-playerScore) + " points 😔")
  }

  
