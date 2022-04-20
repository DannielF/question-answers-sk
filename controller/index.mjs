import history from '../model/history.js';
import { tech, math, spanish, biology, culture } from '../model/questions.js';

const startGame = () => {
  const playerName = document.querySelector("#playerName").value;
  setPlayer(playerName);
  showQuestions(tech);
}

const setPlayer= (playerName) => {
  history.push({player: playerName, points: 0});
  const mainGame = document.querySelector("#main-game");
  const p = document.createElement("p");
  p.innerHTML = `Bienvenido ${history[0].player}`;
  mainGame.append(p);
}

const category = tech;

const showQuestions = (category) => {
  const mainGame = document.querySelector("#main-game");
  const question = document.createElement("p");
  question.innerHTML = "Pregunta: " + category[1].question;
  mainGame.append(question);
  const answers = category[1].answers;

  let i = 1;
  for (let a of answers) {
    const answer = document.createElement("li");
    answer.innerHTML = `${i}`+ " : " + a;
    mainGame.append(answer);
    i++;
  }

  checkUserAnswer(mainGame, category);
}

const buttonStart = document.querySelector("#startGame");
buttonStart.addEventListener("click", startGame);


function checkUserAnswer(mainGame, category) {
  const inputUser = document.createElement("input");
  inputUser.setAttribute("id", "answerUser");
  mainGame.append(inputUser);
  const buttonAnswer = document.createElement("button");
  buttonAnswer.setAttribute("id", "buttonAnswer");
  buttonAnswer.innerHTML = "Responder";
  mainGame.append(buttonAnswer);
  buttonAnswer.addEventListener("click", (e) => {
    const answerUser = document.querySelector("#answerUser").value.toLowerCase();
    const answerCorrect = category[1].correct.toLowerCase();
    if (answerUser == answerCorrect) {
      console.log(answerUser);
      console.log(++history[0].points);
      showPoints();
    }
  });
}

const showPoints = () => {
  const mainGame = document.querySelector("#main-game");
  const points = document.createElement("p");
  points.innerHTML = "Puntos: " + history[0].points;
  mainGame.append(points);
}