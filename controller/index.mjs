import history from '../model/history.js';
import { tech, math, spanish, biology, culture } from '../model/questions.js';

const mainGame = document.querySelector("#main-game");
let isCorrect = false;

const setPlayer = (playerName) => {
  history.push({ player: playerName, points: 0 });
  const p = document.createElement("p");
  p.innerHTML = `Bienvenido ${history[0].player}`;
  mainGame.appendChild(p);
}

const showQuestions = (category, randomQuestion) => {
  console.log("showQuestions");
  const question = document.createElement("p");
  question.innerHTML = "Pregunta: " + category[randomQuestion].question;
  mainGame.appendChild(question);
  const answers = category[randomQuestion].answers;

  let i = 1;
  for (let a of answers) {
    const answer = document.createElement("li");
    answer.innerHTML = `${i}` + " : " + a;
    mainGame.appendChild(answer);
    i++;
  }

  const inputUser = document.createElement("input");
  inputUser.setAttribute("id", "answerUser");

  const buttonAnswer = document.createElement("button");
  buttonAnswer.setAttribute("id", "buttonAnswer");
  buttonAnswer.innerHTML = "Responder";
  mainGame.append(inputUser, buttonAnswer);
}

function checkUserAnswer(category, randomQuestion, buttonAnswer) {
  console.log("checkUserAnswer");

  buttonAnswer.addEventListener("click", (e) => {
    const answerUser = document.querySelector("#answerUser")
      .value
      .toLowerCase();
    const answerCorrect = category[randomQuestion]
      .correct
      .toLowerCase();

    if (answerUser == answerCorrect) {
      isCorrect = true;
      history[0].points++;
      showPoints();
    }

    const p = document.createElement("p");
    p.innerHTML = "Respuesta incorrecta";
    mainGame.appendChild(p);

  })
  return isCorrect;
}

function showPoints() {
  const points = document.createElement("p");
  points.innerHTML = "Puntos: " + history[0].points;
  mainGame.append(points);
}

const loopQuestions = () => {
  const categories = [tech, math, spanish, biology, culture];
  let i = 0;
  let category = categories[i];
  let randomQuestion = Math.floor((Math.random() * 5) + 1);
  
  do {
    showQuestions(category, randomQuestion);
    let isLoop = checkUserAnswer(category, randomQuestion, buttonAnswer);
    if (isLoop) {
      console.log("next question");
      i++;

    } else {
      isLoop = false;
      console.log("game over")
    }
  } while (isLoop);
}

const startGame = () => {
  const playerName = document.querySelector("#playerName").value;
  setPlayer(playerName);
  loopQuestions();
}

const buttonStart = document.querySelector("#startGame");
buttonStart.addEventListener("click", startGame());