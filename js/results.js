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
  
  /*get ../result pages/path.html for results (path from question pages)*/
  const getResultPath = () => {
    let result = "../result pages/";
    result += ei < 0 ? "e" : "i";
    result += sn < 0 ? "s" : "n";
    result += tf < 0 ? "t" : "f";
    result += jp < 0 ? "j" : "p";
    return result + ".html";
  };

  const linkElement = document.getElementById("results-button");

  // Check if the element exists
  if (linkElement) {
    // console.log("ei init value check: ", ei);
    // Set the href attribute using the function
    linkElement.href = getResultPath();
    // clear results values 
    sessionStorage.clear();
    // console.log("ei reset value check: ", ei);
  } else {
    console.warn("Element with ID 'result-link' not found.");
  }
});
//Log the current result string
const logResultString = () => {
  console.log(getResultPath());
};
