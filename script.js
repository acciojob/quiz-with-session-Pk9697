//your JS code here.
const questionsElement=document.getElementById('questions')
const submitButton=document.getElementById('submit')
const scoreDiv=document.getElementById('score')

let score=0

submitButton.addEventListener('click',(e)=>{
	e.preventDefault()
	score=0
	
	for(let i=0;i<questions.length;++i){
		if(questions[i].answer===userAnswers[i]){
			++score
		}
	}

	scoreDiv.textContent=`Your score is ${score} out of ${questions.length}.`
	localStorage.setItem('score',score)
	
})

// Do not change code below this line
// This code will just display the questions to the screen
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];
const userAnswers=new Array(questions.length).fill('')

if(sessionStorage.getItem('progress')){
	userAnswers.length=0
	userAnswers.push(...JSON.parse(sessionStorage.getItem('progress')))
}  

// Display the quiz questions and choices
function renderQuestions() {
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);
    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);
      if (userAnswers[i] === choice) {
        choiceElement.setAttribute("checked", true);
      }
	choiceElement.onclick=(e)=>{
		userAnswers[i]=choice
		// if(userAnswers[i]===question.answer){
		// 	++score
		// }
		sessionStorage.setItem("progress",JSON.stringify(userAnswers))
	}
      const choiceText = document.createTextNode(choice);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
    }
    questionsElement.appendChild(questionElement);
  }
}  
renderQuestions();
