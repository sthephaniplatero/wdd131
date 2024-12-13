const questions = [
  { question: "Do you feel exhausted?", answers: ["Never", "Rarely", "Often", "Always"] },
  { question: "Do you have trouble sleeping?", answers: ["Never", "Rarely", "Often", "Always"] },
  { question: "Do you feel anxious about the future?", answers: ["Never", "Rarely", "Often", "Always"] },
  { question: "Do you feel pressure from work or studies?", answers: ["Never", "Rarely", "Often", "Always"] },
  { question: "Do you get irritated easily?", answers: ["Never", "Rarely", "Often", "Always"] },
  { question: "Do you frequently have headaches?", answers: ["Never", "Rarely", "Often", "Always"] },
  { question: "Do you feel frustrated without apparent reason?", answers: ["Never", "Rarely", "Often", "Always"] },
  { question: "Do you have difficulty concentrating?", answers: ["Never", "Rarely", "Often", "Always"] },
  { question: "Do you feel like you have no time for yourself?", answers: ["Never", "Rarely", "Often", "Always"] },
  { question: "Do you find it hard to relax?", answers: ["Never", "Rarely", "Often", "Always"] },
  { question: "Do you feel overwhelmed by your responsibilities?", answers: ["Never", "Rarely", "Often", "Always"] },
  { question: "Do you frequently have digestive problems?", answers: ["Never", "Rarely", "Often", "Always"] },
  { question: "Do you find it difficult to make decisions?", answers: ["Never", "Rarely", "Often", "Always"] },
  { question: "Do you feel disconnected from your emotions?", answers: ["Never", "Rarely", "Often", "Always"] },
  { question: "Are you worried about your health?", answers: ["Never", "Rarely", "Often", "Always"] },
  { question: "Do you feel very tired even after resting?", answers: ["Never", "Rarely", "Often", "Always"] },
  { question: "Do you have trouble relaxing even during free time?", answers: ["Never", "Rarely", "Often", "Always"] },
  { question: "Do you find it hard to enjoy things you used to like?", answers: ["Never", "Rarely", "Often", "Always"] },
  { question: "Have you felt emotionally drained in recent weeks?", answers: ["Never", "Rarely", "Often", "Always"] },
  { question: "Do you feel nervous even without a clear reason?", answers: ["Never", "Rarely", "Often", "Always"] },
  { question: "Do you find it hard to talk about your concerns?", answers: ["Never", "Rarely", "Often", "Always"] },
  { question: "Do you have trouble disconnecting from work or study?", answers: ["Never", "Rarely", "Often", "Always"] },
];

let userResponses = [];
let currentQuestionIndex = 0;

function displayQuestion() {
  const questionContainer = document.getElementById('question-container');
  const question = questions[currentQuestionIndex];

  questionContainer.innerHTML = `
    <p>${question.question}</p>
    <div>
      ${question.answers
        .map(
          (answer, index) => `
            <label>
              <input type="radio" name="question${currentQuestionIndex}" value="${index}" onclick="storeAnswer(${index})">
              ${answer}
            </label><br>
          `
        )
        .join('')}
    </div>
  `;
}

function storeAnswer(answerIndex) {
  userResponses[currentQuestionIndex] = answerIndex;
}

function nextQuestion() {
  if (userResponses[currentQuestionIndex] === undefined) {
    alert("Please answer the question before continuing.");
    return;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    calculateStress();
  }
}

function calculateStress() {
  let score = userResponses.reduce((sum, answer) => sum + answer, 0);
  let stressLevel = '';
  let stressColor = '';
  let fillWidth = 0;

  if (score <= 30) {
    stressLevel = 'Low';
    stressColor = 'green';
    fillWidth = 20;  // 20% for low stress
  } else if (score <= 50) {
    stressLevel = 'Moderate';
    stressColor = 'orange';
    fillWidth = 50;  // 50% for moderate stress
  } else {
    stressLevel = 'High';
    stressColor = 'red';
    fillWidth = 80;  // 80% for high stress
  }

  // Mostrar los resultados y ocultar el botón "Next"
  const result = document.getElementById('result');
  const fill = document.getElementById('fill');
  const thermometer = document.getElementById('thermometer');

  // Mostrar resultados
  result.innerHTML = `Your stress level is: <strong>${stressLevel}</strong>`;
  result.classList.remove('hidden');  // Asegurarse de que el resultado sea visible

  // Mostrar termómetro
  thermometer.classList.remove('hidden');
  fill.style.width = `${fillWidth}%`;
  fill.style.backgroundColor = stressColor;

  document.getElementById('next-button').style.display = 'none'; // Hide next button
}

// Inicializa la primera pregunta
window.onload = displayQuestion;



function displayForm(color, level) {
  document.getElementById('infoForm').classList.remove('hidden');
  document.getElementById('color').value = color;
  document.getElementById('stressLevel').textContent = level;
}

function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const color = document.getElementById('color').value;

  console.log(`Nombre: ${name}, Email: ${email}, Color: ${color}`);
  alert('¡Gracias por enviar tu información! Pronto recibirás recomendaciones personalizadas.');
  event.target.reset();
}