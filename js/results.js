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

/*get ../result pages/path.html for results*/
const loadResultPath = () => {
  let result = "../result pages/";
  /*TODO: uncomment this after all results pages are in place */
  // if (ei == 0 || sn == 0 || tf == 0 || jp == 0) { //shouldn't happen
  //   sessionStorage.clear();
  //   document.location.href = result + "error.html";
  // } else {
  //   result += ei < 0 ? "e" : "i";
  //   result += sn < 0 ? "s" : "n";
  //   result += tf < 0 ? "t" : "f";
  //   result += jp < 0 ? "j" : "p";
  //   sessionStorage.clear();
  //   document.location.href = result + ".html";
  // }

  /*temporary code */
  result += ei < 0 ? "e" : "i";
    result += sn < 0 ? "s" : "n";
    result += tf < 0 ? "t" : "f";
    result += jp < 0 ? "j" : "p";
    sessionStorage.clear();
    document.location.href = result + ".html";
};
