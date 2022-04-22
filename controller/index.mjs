import history from '../model/history.js';
import { tech, math, spanish, biology, culture } from '../model/questions.js';

const mainGame = document.querySelector("#main-game");
let buttonAnswer = "";
let level = 0;
let idPlayer = 0;

const setPlayer = (playerName) => {
  history.push({ player: playerName, points: 0 });
  const p = document.createElement("p");
  p.innerHTML = `Bienvenido ${history[idPlayer].player}`;
  mainGame.appendChild(p);
}

const showQuestions = (category, randomQuestion) => {
  const question = document.createElement("p");
  question.setAttribute("id", "question");
  question.innerHTML = "Pregunta: " + category[randomQuestion].question;
  mainGame.appendChild(question);
  const answers = category[randomQuestion].answers;

  let i = 1;
  for (let a of answers) {
    const answer = document.createElement("li");
    answer.setAttribute("id", "answer");
    answer.innerHTML = `${i}` + " : " + a;
    mainGame.appendChild(answer);
    i++;
  }

  const inputUser = document.createElement("input");
  inputUser.setAttribute("id", "answerUser");

  buttonAnswer = document.createElement("button");
  buttonAnswer.setAttribute("id", "buttonAnswer");
  buttonAnswer.innerHTML = "Responder";
  mainGame.append(inputUser, buttonAnswer);
}

function checkUserAnswer(category, randomQuestion) {
  console.log(idPlayer);

  const answerUser = document.querySelector("#answerUser")
    .value
    .toLowerCase();
  const answerCorrect = category[randomQuestion]
    .correct
    .toLowerCase();

  if (answerUser == answerCorrect) {
    console.log(idPlayer);
    history[idPlayer].points++
    level++;
    removeChilds();
    showPoints()
    loopQuestions();

  } else {
    const p = document.createElement("p")
    p.innerHTML = "Respuesta incorrecta"
    mainGame.appendChild(p)
    removeChilds();
    const endGame = document.createElement("p");
    endGame.setAttribute("id", "endGame");
    endGame.innerHTML = "Fin del juego";
    mainGame.appendChild(endGame);
    idPlayer++;
    level = 0;
  }
}

function showPoints() {
  const points = document.createElement("p");
  points.setAttribute("id", "points");
  points.innerHTML = "Puntos: " + history[idPlayer].points;
  mainGame.appendChild(points);
}

const loopQuestions = () => {

  if (level < 5) {

    const categories = [tech, math, spanish, biology, culture];
    let category = categories[level]
    let randomQuestion = Math.floor((Math.random() * 5) + 1);
    showQuestions(category, randomQuestion)
    
    buttonAnswer.addEventListener("click", (e) => {
      checkUserAnswer(category, randomQuestion, buttonAnswer)
    })

  } else {
    const gameWon = document.createElement("p");
    gameWon.setAttribute("id", "gameWon");
    gameWon.innerHTML = "Ganaste el juego";
    mainGame.appendChild(gameWon);
    level = 0;
    idPlayer++;
  }

}

const startGame = () => {
  removeChilds();
  const playerName = document.querySelector("#playerName").value;
  setPlayer(playerName);
  loopQuestions();
}

const buttonStart = document.querySelector("#startGame");
buttonStart.addEventListener("click", startGame);


const removeChilds = () => {
  const childs = document.querySelectorAll("#main-game > *");
  for (let c of childs) {
    c.remove();
  }
}

const showHistory = document.querySelector("#showHistory");
showHistory.addEventListener("click", () => {
  removeChilds();
  const p = document.createElement("p");
  p.innerHTML = "Historial";
  mainGame.appendChild(p);
  for (let h of history) {
    const p = document.createElement("p");
    p.innerHTML = `${h.player} - ${h.points}`;
    mainGame.appendChild(p);
  }
})