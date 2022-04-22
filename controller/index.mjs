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
 * 
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
    answer.innerHTML = a;
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
