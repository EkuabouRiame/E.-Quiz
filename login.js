const question = [
    {
        question: "What is the first letter of Jadonang?",
        answers: [
            {text: "J",correct: false},
            {text: "j",correct: false},
            {text: "H",correct: true},
            {text: "None of above",correct: false},
        ]
    },
     {
        question: "what come next in the sequence :2,4,8,16?",
        answers: [
            {text: "18",correct: false},
            {text: "32",correct: true},
            {text: "24",correct: false},
            {text: "20",correct: false},
        ]
    },
     {
        question: "Ekuabou, who is 21 yrs old, is four times as old as his brother. How old will he be when he is twice as old as his brother?",
        answers: [
            {text: "26",correct: false},
            {text: "28",correct: false},
            {text: "18",correct: false},
            {text: "25",correct: true},
        ]
    },
     {
        question: "If you rearrange the letters 'LGENDAN' you have the name of a:",
        answers: [
            {text: "River",correct: false},
            {text: "City",correct: false},
            {text: "Country",correct: true},
            {text: "None of above",correct: false},
        ]
    },
     {
        question: "Which mobile came first?",
        answers: [
            {text: "Motorola",correct: true},
            {text: "Nokia",correct: false},
            {text: "Samsung",correct: false},
            {text: "Sony",correct: false},
        ]
    },
     {
        question: "What is the surname of Rani Gaidinliu?",
        answers: [
            {text: "Gonmei",correct: false},
            {text: "Panmei",correct: false},
            {text: "Newme",correct: false},
            {text: "Pamei",correct: true},
        ]
    },
     {
        question: "Many eyes, but he cannot see anything",
        answers: [
            {text: "Bananas",correct: false},
            {text: "peacock Tail",correct: true},
            {text: "mobile screen",correct: false},
            {text: "None of above",correct: false},
        ]
    },
     {
        question: "Longest river in Manipur is?",
        answers: [
            {text: "Wangjing",correct: false},
            {text: "Nambul",correct: false},
            {text: "Ganga",correct: false},
            {text: "Barak",correct: true},
        ]
    },
     {
        question: "Some months have 31 days. How many have 28 days?",
        answers: [
            {text: "1",correct: false},
            {text: "3",correct: false},
            {text: "9",correct: false},
            {text: "12",correct: true},
        ]
    },
     {
        question: "I was born in 'A' but My name start with 'E'.What is my Zodiac sign?",
        answers: [
            {text: "Aries",correct: true},
            {text: "Gemini",correct: false},
            {text: "Leo",correct: false},
            {text: "Aquarius",correct: false},
        ]
    },

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion()
}
function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
});
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
    }
    button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
    handleNextButton();
    }else{
    startQuiz();
}});

startQuiz();
