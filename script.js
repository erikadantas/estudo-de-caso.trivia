// Perguntas e respostas do trivia
const questions = [
    {
        question: "Qual é o maior planeta do sistema solar?",
        answers: ["Terra", "Marte", "Júpiter", "Vênus"],
        correct: 2
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        answers: ["Miguel de Cervantes", "William Shakespeare", "José Saramago", "Gabriel García Márquez"],
        correct: 0
    },
    {
        question: "Qual é a capital da Austrália?",
        answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

window.onload = function() {
    loadQuestion();
};

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const result = document.getElementById('result');

    if (selectedIndex === currentQuestion.correct) {
        result.textContent = "Correto!";
        score++;
    } else {
        result.textContent = "Errado!";
    }

    document.getElementById('score').textContent = `Pontos: ${score}`;
    
    // Carregar próxima pergunta ou encerrar o jogo
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(() => {
            result.textContent = ""; // Limpar o resultado anterior
            loadQuestion();
        }, 1000); // Aguardar um segundo antes de carregar a próxima pergunta
    } else {
        setTimeout(() => {
            result.textContent = "Fim do jogo!";
            disableButtons();
        }, 1000);
    }
}

function disableButtons() {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(button => {
        button.disabled = true;
    });
}
