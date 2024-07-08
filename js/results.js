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

const getResults = () => {
  window.location.href = "../pages/results.html";
}

/*TODO: load results pic*/
const loadResults = () => {
  let result = "../images/results/";

  /*TODO: uncomment this after all results pics are in place */
  // if (ei == 0 || sn == 0 || tf == 0 || jp == 0) { //shouldn't happen
  //   sessionStorage.clear();
  //   document.location.href = "../pages/error.html"
  // } else {
  //   result += ei < 0 ? "e" : "i";
  //   result += sn < 0 ? "s" : "n";
  //   result += tf < 0 ? "t" : "f";
  //   result += jp < 0 ? "j" : "p";
  //   sessionStorage.clear();
  // }

  /*temporary code */
    result += ei < 0 ? "e" : "i";
    result += sn < 0 ? "s" : "n";
    result += tf < 0 ? "t" : "f";
    result += jp < 0 ? "j" : "p";
    sessionStorage.clear();
    document.getElementById("result image").src = result + ".png";
};

/*restart quiz */
const restartQuiz = () => {
  sessionStorage.clear();
  document.location.href = "../index.html";
}
