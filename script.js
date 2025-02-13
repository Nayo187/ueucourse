function checkQuiz() {
  // Obtener el nombre ingresado
  const nombre = document.getElementById("nombre").value.trim();

  // Validar que se haya ingresado un nombre
  if (nombre === "") {
    alert("Por favor, ingresa tu nombre antes de enviar el cuestionario.");
    return;
  }
  // Respuestas correctas
  const correctAnswers = {
    q1: "arraylist",
    q2: "add",
    q3: "string",
    q4: "class",
    q5: "length",
    q6: "extends",
    q7: "Comparable",
    q8: "toUpperCase",
    q9: "new",
    q10: "equals",
  };

  let score = 0;

  // Verificar respuestas
  for (let i = 1; i <= 10; i++) {
    const questionName = "q" + i;
    const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);

    if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswers[questionName]) {
        score++;
      }
    }
  }

  // Mostrar resultado
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `${nombre}, Obtuviste ${score} de 10 respuestas correctas.`;

  // Resaltar respuestas correctas e incorrectas
  for (let i = 1; i <= 10; i++) {
    const questionName = "q" + i;
    const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
    const correctAnswer = correctAnswers[questionName];

    if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswer) {
        selectedAnswer.parentElement.style.color = "yellow";
      } else {
        selectedAnswer.parentElement.style.color = "red";
      }
    }

    // Resaltar la respuesta correcta
    const correctOption = document.querySelector(`input[name="${questionName}"][value="${correctAnswer}"]`);
    if (correctOption) {
      correctOption.parentElement.style.color = "yellow";
    }
  }
}

function checkQuizBucles() {
  const q1 = document.querySelector('input[name="q2"]:checked');
  let result = '';

  if (q1) {
    if (q1.value === 'do-while') {
      result = '✅ ¡Correcto! Switch se usa para múltiples opciones.';
    } else {
      result = '❌ Incorrecto. La respuesta correcta es Switch.';
    }
  } else {
    result = '⚠️ Por favor, selecciona una respuesta.';
  }

  document.getElementById('result-bucles').innerHTML = `<p>${result}</p>`;
}


function checkQuizCondicionales() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  let result = '';

  if (q1) {
    if (q1.value === 'switch') {
      result = '✅ ¡Correcto! Switch se usa para múltiples opciones.';
    } else {
      result = '❌ Incorrecto. La respuesta correcta es Switch.';
    }
  } else {
    result = '⚠️ Por favor, selecciona una respuesta.';
  }

  document.getElementById('result').innerHTML = `<p>${result}</p>`;
}

/* DNAMICA PARA EL CUESTIONARIO DE ENTORNO DE NETBEANS*/

function quizentorno(){
// Obtener el nombre ingresado
const nombre = document.getElementById("nombre").value.trim();

// Validar que se haya ingresado un nombre
if (nombre === "") {
  alert("Por favor, ingresa tu nombre antes de enviar el cuestionario.");
  return;
}


const q1 = document.querySelector('input[name="q1"]:checked');
  let score = 0;

  if (document.querySelector('input[name="netbeans-q1"]:checked')?.value === "correct") {
    score++;
  }

  if (q1) {
    if (q1.value === 'correct') {
      result = '✅ ¡Correcto! Java se usa para el desarrollo de aplicaciones.';
    } else {
      result = '❌ Incorrecto. Intenta de nuevo.';
    }
  } else {
    result = '⚠️ Por favor, selecciona una respuesta.';
  }

 // document.getElementById('result').innerHTML = `<p>${studentName},   ${result}, tu puntuación es: ${score}/1 </p>`;
  /*document.getElementById("netbeans-quiz-score").textContent = `${studentName}, tu puntuación es: ${score}/1`;*/
   // Mostrar resultado
   const resultDiv = document.getElementById("result");
   resultDiv.innerHTML = `${nombre}, tu puntuación es: ${score}/1`;
}



