const quiz       = document.querySelectorAll('.quiz');
const result     = document.querySelector('.result');
const options    = document.querySelectorAll('.option');
const restartBtn = document.querySelector('.restart');

let currentQuestionIndex = 0;
let totalScore = 0; // Variável para armazenar a pontuação total

// Função para mostrar a pergunta
function showQuestion(index) {
    quiz.forEach((question, i) => {
        question.style.display = i === index ? 'block' : 'none';
    });
}

// Função para mostrar o resultado final
function showResult() {
    quiz.forEach(question => question.style.display = 'none');
    result.style.display = 'block';

    // Condições baseadas na pontuação total
    if (totalScore <= 4) {
        result.querySelector('h2').textContent = 'Resultado: Floral Suave';
        result.querySelector('p').textContent = 'Você prefere fragrâncias leves e refrescantes, ideais para qualquer ocasião.';
    } else if (totalScore <= 6) {
        result.querySelector('h2').textContent = 'Resultado: Amadeirado Intenso';
        result.querySelector('p').textContent = 'Você prefere fragrâncias mais intensas e marcantes, perfeitas para momentos especiais.';
    } else if (totalScore <= 8) {
        result.querySelector('h2').textContent = 'Resultado: Doce Floral';
        result.querySelector('p').textContent = 'Você adora fragrâncias doces e florais, que transmitem delicadeza e sofisticação.';
    } else {
        result.querySelector('h2').textContent = 'Resultado: Refrescante e Energético';
        result.querySelector('p').textContent = 'Você prefere perfumes frescos e energizantes, perfeitos para o dia a dia.';
    }
}

// Adicionando o evento de clique nas opções
options.forEach(option => {
    option.addEventListener('click', () => {
        // Somando o valor da pontuação
        totalScore += parseInt(option.getAttribute('data-score'));

        currentQuestionIndex++;

        if (currentQuestionIndex < quiz.length) {
            showQuestion(currentQuestionIndex);
        } else {
            showResult(); // Mostra o resultado final
        }
    });
});

// Função para reiniciar o quiz
restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    totalScore = 0; // Resetando a pontuação
    showQuestion(currentQuestionIndex);
    result.style.display = 'none';
});

// Mostrar a primeira pergunta
showQuestion(currentQuestionIndex);