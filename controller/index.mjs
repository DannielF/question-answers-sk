import history from '../model/history.js';
import { tech, math, spanish, biology, culture } from '../model/questions.js';

const mainGame = document.querySelector("#main-game");
let buttonAnswer = "";
let level = 0;

const setPlayer = (playerName) => {
  history.push({ player: playerName, points: 0 });
  const p = document.createElement("p");
  p.innerHTML = `Bienvenido ${history[0].player}`;
  mainGame.appendChild(p);
}

const showQuestions = (category, randomQuestion) => {
  console.log("showQuestions");
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
  console.log("checkUserAnswer");

  const answerUser = document.querySelector("#answerUser")
    .value
    .toLowerCase();
  const answerCorrect = category[randomQuestion]
    .correct
    .toLowerCase();

  if (answerUser == answerCorrect) {
    history[0].points++
    showPoints()
    level++;
    removeChilds();
    loopQuestions();

  } else {
    const p = document.createElement("p")
    p.innerHTML = "Respuesta incorrecta"
    mainGame.appendChild(p)
    console.log("game over")
  }
}

function showPoints() {
  const points = document.createElement("p");
  points.innerHTML = "Puntos: " + history[0].points;
  mainGame.append(points);
}

const loopQuestions = () => {
  const categories = [tech, math, spanish, biology, culture];
  let category = categories[level]
  let randomQuestion = Math.floor((Math.random() * 5) + 1);
  showQuestions(category, randomQuestion)
  
  buttonAnswer.addEventListener("click", (e) => {
    checkUserAnswer(category, randomQuestion, buttonAnswer)
  })
}

const startGame = () => {
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