const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [];

function askForName(){
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name: ");
  console.log("");
}

function askQuestion(){
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  let answer = "";
  for (let i = 0; i < questions.length; i++){
    answer = input.question(questions[i]);
    candidateAnswers.push(answer);
    console.log("");
  } 
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let numberOfQuizQuestions = 0;
  let numberOfCorrectAnswers = 0;
  
  console.log(`Candidate Name: ${candidateName}`);
  for (let i = 0;i < candidateAnswers.length;i++) {
   let inquiryPrint = `${numberOfQuizQuestions + 1}) ${questions[i]}`
   let candidateAnswerPrint = `Your Answer: ${candidateAnswers[i]}`
   let answerPrint = `Correct Answer: ${correctAnswers[i]}`

    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      console.log(inquiryPrint);
      console.log(candidateAnswerPrint);
      console.log(answerPrint);
      console.log("");
      numberOfCorrectAnswers += 1;
    } else {
      console.log(inquiryPrint);
      console.log(candidateAnswerPrint);
      console.log(answerPrint);
      console.log("");
    }
    numberOfQuizQuestions += 1
  }

  let grade = (numberOfCorrectAnswers) / (numberOfQuizQuestions) * 100

  let gradePrint = `>>> Overall Grade: ${grade}% (${numberOfCorrectAnswers} of ${numberOfQuizQuestions} responses correct) <<<`
  
  if (numberOfCorrectAnswers >= 4){
    console.log(gradePrint);
    console.log(`>>> Status: PASSED <<<`)
    } else {
    console.log(gradePrint);
    console.log(`>>> Status: FAILED <<<`)
    }  
  return grade;  
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello, " + candidateName + " welcome to the astronaut training program!");
  console.log("");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};