/*results functions*/
//If negative value, take the left result, if positive take the right
let ei = 0; /*extroverted vs. introverted*/
let sn = 0; /*sensing vs. intuition*/
let tf = 0; /*thinking vs. feeling*/
let jp = 0; /*judging vs. perceiving*/

document.addEventListener("DOMContentLoaded", () => {
  ei = parseInt(sessionStorage.getItem("ei")) || 0;
  sn = parseInt(sessionStorage.getItem("sn")) || 0;
  tf = parseInt(sessionStorage.getItem("tf")) || 0;
  jp = parseInt(sessionStorage.getItem("jp")) || 0;
});

/*return 4-letter mbti as a string */
const getResults = () => {
  let result = '';
  result += ei < 0 ? "e" : "i";
  result += sn < 0 ? "s" : "n";
  result += tf < 0 ? "t" : "f";
  result += jp < 0 ? "j" : "p";
  return result;
}

/*load "mirror.png" of theme into src img*/
const loadMirror = () => {
  document.getElementById("image").src = "../images/" + theme + "/mirror.png";
}

const goReflection = () => {
  window.location.href = "../pages/reflection.html";
}

/*load results mon on mirror closeup */
const loadMirrorCloseup = () => {
  let mbti = getResults();
  document.getElementById("image").src = "../images/monsters/" + mbti + ".png";
}

const goResults = () => {
  window.location.href = "../pages/results.html";
}

/*load results pic*/
const loadResults = () => {
  let result = "../images/results/";

  if (ei == 0 || sn == 0 || tf == 0 || jp == 0) { //shouldn't happen
    sessionStorage.clear();
    document.location.href = "../pages/error.html"
  } else {
    document.getElementById("result image").src = result + getResults() + ".png";
  }
};

/*restart quiz */
const restartQuiz = () => {
  document.location.href = "../index.html";
}
