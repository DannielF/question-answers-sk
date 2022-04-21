import history from '../model/history.js';
import { tech, math, spanish, biology, culture } from '../model/questions.js';

const startGame = () => {
  const playerName = document.querySelector("#playerName").value;
  setPlayer(playerName);
  loopQuestions();
}

const buttonStart = document.querySelector("#startGame");
buttonStart.addEventListener("click", startGame);

const setPlayer= (playerName) => {
  history.push({player: playerName, points: 0});
  const mainGame = document.querySelector("#main-game");
  const p = document.createElement("p");
  p.innerHTML = `Bienvenido ${history[0].player}`;
  mainGame.append(p);
}

const loopQuestions = () => {
  const categories = [tech, math, spanish, biology, culture];
  let i = 0;
  let isLoop = true;
  do {
    showQuestions(categories[i]);
    if (checkUserAnswer()) {
      i++;
    } else {
      isLoop = false;
      console.log("game over")
    }
  } while (isLoop);
}

const showQuestions = (category) => {
  const mainGame = document.querySelector("#main-game");
  const question = document.createElement("p");
  const randomQuestion = Math.floor((Math.random() * 5) + 1);
  question.innerHTML = "Pregunta: " + category[randomQuestion].question;
  mainGame.append(question);
  const answers = category[randomQuestion].answers;

  let i = 1;
  for (let a of answers) {
    const answer = document.createElement("li");
    answer.innerHTML = `${i}`+ " : " + a;
    mainGame.append(answer);
    i++;
  }

  checkUserAnswer(category, randomQuestion);
}

function checkUserAnswer(category, randomQuestion) {
  const mainSection = document.querySelector("#main-game");

  const inputUser = document.createElement("input");
  inputUser.setAttribute("id", "answerUser");

  const buttonAnswer = document.createElement("button");
  buttonAnswer.setAttribute("id", "buttonAnswer");
  buttonAnswer.innerHTML = "Responder";
  mainSection.append(inputUser, buttonAnswer);

  buttonAnswer.addEventListener("click", (e) => {
    const answerUser = document.querySelector("#answerUser").value.toLowerCase();
    const answerCorrect = category[randomQuestion].correct.toLowerCase();
    if (answerUser == answerCorrect) {
      showPoints();
      return true;
    }
  });
}

const showPoints = () => {
  const mainGame = document.querySelector("#main-game");
  const points = document.createElement("p");
  points.innerHTML = "Puntos: " + history[0].points;
  mainGame.append(points);
}