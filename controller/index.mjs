import history from '../model/history.js';
import { tech, math, spanish, biology, culture } from '../model/questions.js';

/**
 * @author Dímar Andrey Suárez Hidalgo <dimar260212@gmail.com>
 * @author Steveen Stick Rodriguez Torres 
 * @author Daniel Fernando Granados
 * @version 1.0.0
 * @since 1.0.0
 */

/**
 * Global variablesconst questions_tech = {
  1: {
    question: "¿Es un framework para JavaScript?",
    answers: ["Read", "Angular", "Vuex", "Embert"],
    correct: "angular",
  },
  2: {
    question: "En que año salió Vue.js",
    answers: ["2015", "2016", "2017", "2018"],
    correct: "2015",
  },
  3: {
    question: "¿Qué significa JSON?",
    answers: ["JavaScript Object Notation", "JavaScript Object Notable", "JavaScript Object Number", "JavaScript Object Number One"],
    correct: "JavaScript Object Notation",
  },
  4: {
    question: "¿Qué es el motor de JS de Chrome?",
    answers: ["V8", "Chrome", "Blink", "Webkit"],
    correct: "V8",
  },
  5: {
    question: "¿Cuál el fue uno de los primero nombres de JS?",
    answers: ["LiveScript", "JavaScript", "CoffeeScript", "TypeScript"],
    correct: "CoffeeScript",
  }
}

const questions_culture = {
  1: {
    question: "¿En qué año se dio la independencia Colombiana?",
    answers: ["1900", "1010", "1991", "1810"],
    correct: "1810"
  },
  2: {
    question: "¿Con qué país no limita Colombia?",
    answers: ["Venezuela", "Ecuador", "Perú", "México"],
    correct: "México"
  },
  3: {
    question: "¿Quién ganó la guerra de los Mil Días?",
    answers: ["Centro democrático", "Cambio radical", "Partido liberal", "Partido conservador"],
    correct: "Partido conservador"
  },
  4: {
    question: "¿Cuál es el significado de el color azul de la bandera Colombiana?",
    answers: ["Por las naciones unidas", "Los sumerios", "Por el color de ojos de las ballenas", "Por los dos mares que nos rodean"],
    correct: "Por los dos mares que nos rodean"
  },
  5: {
    question: "¿De qué país se independizó Colombia?",
    answers: ["Perú", "Estados unidos", "Venezuela", "España"],
    correct: "España"
  }
}

const questions_biology = {
  1: {
    question: "¿Significado de ADN?",
    answers: ["Add, Delete, New", "Anuncios de google", "Comida tipica China", "Ácido Desoxirribonucleico"],
    correct: "Ácido Desoxirribonucleico",
  },
  2: {
    question: "Se alimenta de toda clase de sustancias orgánicas...",
    answers: ["Animales", "Herviboros", "Carnivoros", "Omnívoro"],
    correct: "Omnívoro",
  },
  3: {
    question: "No es un animal cuadrupedo",
    answers: ["Perro", "Tigre", "Elefante", "Gallina"],
    correct: "Gallina",
  },
  4: {
    question: "¿Cómo se le llama al ser vivo que se sostiene en dos patas?",
    answers: ["Homo-sapiens", "Mono", "Cuadrupedo", "Bípedo"],
    correct: "bípedo",
  },
  5: {
    question: "¿Qué comen las vacas?",
    answers: ["Leche", "Queso", "Carne", "Pasto"],
    correct: "Pasto",
  },
}

const questions_math = {
  1: {
    question: "¿Cuánto es un lustro?",
    answers: ["3 años", "2 años", "1 año", "5 años"],
    correct: "5 años",
  },
  2: {
    question: "¿Cómo se lee este número: 3 DM+ 6UM + 8C",
    answers: ["36", "336", "36000", "36800"],
    correct: "36800",
  },
  3: {
    question: "Para calcular cuánto es un tercio de 3996, ¿qué tienes que hacer?",
    answers: [ "Multiplicar por tres", "Restar tres","sumas tres", "Dividir entre tres"],
    correct: "Dividir entre tres",
  },
  4: {
    question: "Número ordinal trigésimo quinto en cifras...",
    answers: ["35", "83","73", "63"],
    correct: "35",
  },
  5: {
    question: "¿Cuál es el resultado de multiplicar 7x9?",
    answers: ["63", "14", "49", "70"],
    correct: "63",
  },
}

const questions_spanish = {
  1: {
    question: "Grupo de dos vocales distintas y contiguas que se pronuncian en una sola sílaba",
    answers: ["Párrafo", "Oración", "Tílde", "Diptongo"],
    correct: "Diptongo"
  },
  2: {
    question: "Signos de puntuación que se emplean para insertar una información complementaria en medio de una frase",
    answers: ["Coma", "Punto y Coma", "Comillas", "Paréntesis"],
    correct: "Paréntesis"
  },
  3: {
    question: "Que llevan el acento en la antepenúltima sílaba y a todas se les marca la tilde",
    answers: ["Agudas", "Graves", "Sobresdrújulas", "Esdrújulas"],
    correct: "Esdrújulas"
  },
  4: {
    question: "¿Cúal es el signo ampersand?",
    answers: ["!", ":", "%", "&"],
    correct: "&"
  },
  5: {
    question: "Palabra que suena de igual modo que otra, pero que difiere en el significado",
    answers: ["Graves", "Agudas", "Esdrújulas", "Homófona"],
    correct: "Homófona"
  }
}

export {
  questions_tech as tech,
  questions_math as math,
  questions_spanish as spanish,
  questions_culture as culture,
  questions_biology as biology
}
 */
const mainGame = document.querySelector('#main-game');
let buttonAnswer = '';
let level = 0;
let idPlayer = 0;

/**
 * Set the name of each player
 * and save the player in the history
 * @param {*} playerName 
 */
const setPlayer = (playerName) => {
  history.push({ player: playerName, points: 0 });
  const p = document.createElement('p');
  p.innerHTML = `Bienvenido ${history[idPlayer].player}`;
  mainGame.appendChild(p);
};

/**
 * Show the question in the screen
 * with a random question
 * @param {*} category 
 * @param {*} randomQuestion 
 */
const showQuestion = (category, randomQuestion) => {
  const question = document.createElement('p');
  question.setAttribute('id', 'question');
  question.innerHTML = 'Pregunta: ' + category[randomQuestion].question;
  mainGame.appendChild(question);
  const answers = category[randomQuestion].answers;

  let i = 1;
  for (let a of answers) {
    const answer = document.createElement('li');
    answer.setAttribute('id', 'answer');
    answer.innerHTML = `${i}` + ' : ' + a;
    mainGame.appendChild(answer);
    i++;
  }

  const inputUser = document.createElement('input');
  inputUser.setAttribute('id', 'answerUser');

  buttonAnswer = document.createElement('button');
  buttonAnswer.setAttribute('id', 'buttonAnswer');
  buttonAnswer.innerHTML = 'Responder';
  mainGame.append(inputUser, buttonAnswer);
};

/**
 * Check if the user answer is correct
 * if its wrong, the player lose the game
 * if its right, proceed to the next question
 * @param {*} category 
 * @param {*} randomQuestion 
 */
function checkUserAnswer(category, randomQuestion) {
  const answerUser = document.querySelector('#answerUser').value.toLowerCase();
  const answerCorrect = category[randomQuestion].correct.toLowerCase();

  if (answerUser == answerCorrect) {
    history[idPlayer].points++;
    level++;
    removeChildren();
    showPoints();
    loopQuestions();
  } else {
    const p = document.createElement('p');
    p.innerHTML = 'Respuesta incorrecta';
    mainGame.appendChild(p);
    removeChildren();
    const endGame = document.createElement('p');
    endGame.setAttribute('id', 'endGame');
    endGame.innerHTML = 'Fin del juego';
    mainGame.appendChild(endGame);
    idPlayer++;
    level = 0;
  }
}

/**
 * Show the points of the player
 * in the screen
 */
function showPoints() {
  const points = document.createElement('p');
  points.setAttribute('id', 'points');
  points.innerHTML = 'Puntos: ' + history[idPlayer].points;
  mainGame.appendChild(points);
}

/**
 * Iterate over the questions and listen to the event buttonAnswer
 */
const loopQuestions = () => {
  if (level < 5) {
    const categories = [tech, math, spanish, biology, culture];
    let category = categories[level];
    let randomQuestion = Math.floor(Math.random() * 5 + 1);
    showQuestion(category, randomQuestion);

    buttonAnswer.addEventListener('click', (e) => {
      checkUserAnswer(category, randomQuestion, buttonAnswer);
    });
  } else {
    const gameWon = document.createElement('p');
    gameWon.setAttribute('id', 'gameWon');
    gameWon.innerHTML = 'Ganaste el juego';
    mainGame.appendChild(gameWon);
    level = 0;
    idPlayer++;
  }
};

/**
 * Starts a new game and clean the screen
 */
const startGame = () => {
  removeChildren();
  const playerName = document.querySelector('#playerName').value;
  setPlayer(playerName);
  loopQuestions();
};

/**
 * Listen to the event startGame
 */
const buttonStart = document.querySelector('#startGame');
buttonStart.addEventListener('click', startGame);

/**
 * Remove all the children of the mainGame
 * clean the screen
 */
const removeChildren = () => {
  const children = document.querySelectorAll('#main-game > *');
  for (let c of children) {
    c.remove();
  }
};

/**
 * Show the history of the players
 * in the screen
 * order by Highest points
 */
const showHistory = document.querySelector('#showHistory');
showHistory.addEventListener('click', () => {
  removeChildren();
  const p = document.createElement('p');
  p.innerHTML = 'Historial';
  mainGame.appendChild(p);
  let orderByHigh = history.sort((a, b) => {
    return b.points - a.points;
  });
  for (let h of orderByHigh) {
    const p = document.createElement('p');
    p.innerHTML = `${h.player} - ${h.points}`;
    mainGame.appendChild(p);
  }
});
