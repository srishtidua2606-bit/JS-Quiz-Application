document.addEventListener('DOMContentLoaded', function() {
 const quizContainer = document.getElementById("quiz-container")
 const quesContainer = document.getElementById("question-container")
 const quesText = document.getElementById("question-text")
 const choiceList = document.getElementById("choices-list")
 const scoreDisplay = document.getElementById("score")
//  all buttons
 const nextBtn = document.getElementById("next-btn")
 const restartBtn = document.getElementById("restart-btn")
 const startBtn = document.getElementById("start-btn")
  
 const ques = [
{
    ques : "What is the capital of France?",
    choices : ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
},
{
    question: "Which planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars",

},
 {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },

 ]
 let currentQuesIndex = 0;
 let score = 0;

 startBtn.addEventListener("click", startQuiz)


 function startQuiz(){
    startBtn.classList.add("hidden")
    quesContainer.classList.remove("hidden")
    showQuestion()

 }
 function showQuestion(){
    nextBtn.classList.add("hidden")
    quesText.textContent = ques[currentQuesIndex].ques
    choiceList.innerHTML = ''//clear previous choices
    ques[currentQuesIndex].choices.forEach(choice => {
        const li = document.createElement("li")
        li.textContent = choice
        choiceList.append(li)
        li.addEventListener("click", () => selectAnswer(choice))

    })


 }
//  function selectAnswer(choice){
//     const correctAnswer = ques[currentQuesIndex].answer  
//     if(choice ===){

//       }
//  }

})