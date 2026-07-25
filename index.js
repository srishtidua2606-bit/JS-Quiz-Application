document.addEventListener('DOMContentLoaded', function() {
 const quizContainer = document.getElementById("quiz-container")
 const quesContainer = document.getElementById("question-container")
 const quesText = document.getElementById("question-text")
 const choiceList = document.getElementById("choices-list")
 const scoreDisplay = document.getElementById("score")
 const resultContainer = document.getElementById("result-container")

//  all buttons
 const nextBtn = document.getElementById("next-btn")
 const restartBtn = document.getElementById("restart-btn")
 const startBtn = document.getElementById("start-btn")
  
 const ques = [
{
    question : "What is the capital of France?",
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
 nextBtn.addEventListener("click",()=>{
    currentQuesIndex++;
    if(currentQuesIndex < ques.length){
      showQuestion()
    }else{
      resultDisplay()
    }
})
restartBtn.addEventListener("click", () => {
  score = 0
  currentQuesIndex = 0
  resultContainer.classList.add("hidden")
  // quesContainer.classList.remove("hidden")
  startQuiz()
})

 function startQuiz(){
    startBtn.classList.add("hidden")
    quesContainer.classList.remove("hidden")
    showQuestion()

 }
 function showQuestion(){
    nextBtn.classList.add("hidden")
    quesText.textContent = ques[currentQuesIndex].question
    choiceList.innerHTML = ''//clear previous choices
    ques[currentQuesIndex].choices.forEach(choice => {
        const li = document.createElement("li")
        li.textContent = choice
        choiceList.append(li)
        li.addEventListener("click", () => selectAnswer(choice))

    })


 }

 function selectAnswer(choice){
    const correctAnswer = ques[currentQuesIndex].answer  
    if(choice === correctAnswer){
        score += 1;
      }
      nextBtn.classList.remove("hidden")
 }

 function resultDisplay(){
    quesContainer.classList.add("hidden")
    resultContainer.classList.remove("hidden")
    scoreDisplay.textContent = `${score} out of ${ques.length}`
 }
})