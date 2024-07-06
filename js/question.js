let theme = "forest"; /*forest vs. dungeon*/
let questionCounter = 0;
let questionObject;
let imagePath;
const maxQuestionNumber = 13;
const middleButtonPosition = "50%";
const secondButtonPosition = "20%";
const forestImagePath = "../images/forest/"
const dungeonImagePath = "../images/dungeon/"


document.addEventListener("DOMContentLoaded", () => {
  theme = sessionStorage.getItem("theme") || "forest";
  //questionCounter = parseInt(sessionStorage.getItem("questionCounter")) || 0;
});

function displayQuestion() {
  if (theme == "forest") {
    questionObject = window.forestQuestions;
    imagePath = forestImagePath;

  } else {
    questionObject = window.dungeonQuestions;
    imagePath = dungeonImagePath;
  }
  if (questionCounter < maxQuestionNumber) {
    if (questionObject[questionCounter].mbti == "") { //transition page
      if (document.getElementById("answer1").style.display === "block") { // hide answer1
        document.getElementById("answer1").style.display = "none";
      }
      // update answer2 positioning
      document.getElementById("answer2").style.bottom = middleButtonPosition;
    } else {
      if (document.getElementById("answer1").style.display === "none") { // show answer1
        document.getElementById("answer1").style.display = "block";
      }
      //change text for answer 1
      document.getElementById("answer1").innerHTML = questionObject[questionCounter].answers[0].text;
      //update answer2 positioning
      document.getElementById("answer2").style.bottom = secondButtonPosition;
    }
    document.getElementById("progress").style.width = (questionCounter+1)/maxQuestionNumber * 100 + "%";
    document.getElementById("image").src = imagePath + questionCounter + ".png";
    document.getElementById("question").innerHTML = questionObject[questionCounter].question;
    document.getElementById("answer2").innerHTML = questionObject[questionCounter].answers[1].text;
  } else {
    window.location.href = "../question pages/click for results.html";
  }

}

const answer1Handler = () => {
  console.log("answer 1 handler");
  let mbti = questionObject[questionCounter].mbti;
  let value = questionObject[questionCounter].answers[0].value;
  questionCounter++;
  //sessionStorage.setItem("questionCounter", questionCounter);
  if (mbti == "ei") {
    ei += value;
    sessionStorage.setItem("ei", ei);
  } else if (mbti == "sn") {
    sn += value;
    sessionStorage.setItem("sn", sn);
  } else if (mbti == "tf") {
    tf += value;
    sessionStorage.setItem("tf", tf);
  } else if (mbti == "jp") {
    jp += value;
    sessionStorage.setItem("jp", jp);
  } else {
    //transition page, do nothing?
  }
  displayQuestion();
}

const answer2Handler = () => {
  console.log("answer 2 handler");
  let mbti = questionObject[questionCounter].mbti;
  let value = questionObject[questionCounter].answers[1].value;
  questionCounter++;
  //sessionStorage.setItem("questionCounter", questionCounter);
  if (mbti == "ei") {
    ei += value;
    sessionStorage.setItem("ei", ei);
  } else if (mbti == "sn") {
    sn += value;
    sessionStorage.setItem("sn", sn);
  } else if (mbti == "tf") {
    tf += value;
    sessionStorage.setItem("tf", tf);
  } else if (mbti == "jp") {
    jp += value;
    sessionStorage.setItem("jp", jp);
  } else {
    //transition page, do nothing?
  }
  displayQuestion();
}