
var readlineSync = require("readline-sync");


 

 var username = readlineSync.question("Enter your name bud : ")
console.log("Welcome to DO YOU KNOW ME? quiz " + username + "!!!")

var score = 0


function quizque(question, answer) {
  var useranswer = readlineSync.question(question)
  if (answer === useranswer.toUpperCase()) {
     
    score= score+1
    console.log("You are right " + username + "!")
    console.log("Your score is:" + score)
  } else {
    score= score-1
    console.log("Oops! you are wrong")
    console.log("The correct answer is " + answer + "!")
    console.log("Your score is :" + score  + " You lost one mark!! :(")
  }
}
console.log("-------------------------------")
quizque("What is my name? ","GAURI")
console.log("-------------------------------")

quizque("Where do I live? ","MUMBAI")
console.log("-------------------------------")

quizque("What do I do? job/study ","STUDY")
console.log("-------------------------------")

quizque("Which is my favourite drink? ", "COFFEE")
console.log("-------------------------------")



quizque("Who is my favourite actor? ", "CHRIS HEMSWORTH")
console.log("-------------------------------")

quizque("which is my favourite colour? ", "ASH GREY")
console.log("-------------------------------")



quizque("What do you think I want to be?  ", "STAR LORD")
console.log("-------------------------------")



console.log("Your Total score is: " + score + "!!")

var finalscore = score
if (finalscore === 7) {
  console.log("You know me very well!! BRILLIANT!!")
} else { 
  console.log("oops, you know me just less than very well;)")
}