let theme = "forest"; /*forest vs. dungeon*/
let questionCounter = 1;
let questionObject;
let imagePath;
const maxQuestionNumber = 13;

document.addEventListener("DOMContentLoaded", () => {
  theme = sessionStorage.getItem("theme") || "forest";
  questionCounter = parseInt(sessionStorage.getItem("questionCounter")) || 1;
});

function displayQuestion() {
  if (theme === "forest") {
    questionObject = forestQuestions;
    imagePath = forestImagePath;
  } else if (theme === "dungeon") {
    questionObject = dungeonQuestions;
    imagePath = dungeonImagePath;
  }
  if (questionCounter <= maxQuestionNumber) {
    if (questionObject[questionCounter].answers[0].text == "") { //transition page
      //hide answer1 object, update answer2 positioning
    } else {
      //answer1 show, change text, update answer2 positioning, attach event handler to answer1
    }
    document.getElementById("progress").style.width = questionCounter/maxQuestionNumber * 100 + "%";
    document.getElementById("image").src = imagePath + questionCounter + ".jpg";
    document.getElementById("question").innerHTML = questionObject[questionCounter].question;
    let answer2 = document.getElementById("answer2");
    answer2.innerHTML = questionObject[questionCounter].answers[1].text;
    answer2.addEventListener("click", 
      answerHandler(questionObject[questionCounter].mbti, 
        questionObject[questionCounter].answers[1].value, answer2));
  } else {
    window.location.href = "../question pages/click for results.html";
  }

}

const answerHandler = (mbti, value, buttonElement) => {
  buttonElement.removeEventListener("click", answerHandler);
  questionCounter++;
  sessionStorage.setItem("questionCounter", questionCounter);
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
    //transition page
  }
  displayQuestion();
}