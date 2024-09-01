let theme = "forest"; /*forest vs. dungeon*/
let questionCounter = 0;
let questionObject;
let imagePath;
const maxQuestionNumber = 13;
const middleButtonPosition = "30%"; /*doesnt work */
const secondButtonPosition = "20%";
const defaultSpriteTop = "40%";
const defaultSpriteLeft = "25%";
const forestImagePath = "../images/forest/";
const dungeonImagePath = "../images/dungeon/";


document.addEventListener("DOMContentLoaded", () => {
  theme = sessionStorage.getItem("theme") || "forest";
  questionCounter = parseInt(sessionStorage.getItem("questionCounter")) || 0;
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
    let currQuestion = questionObject[questionCounter];
    if (currQuestion.mbti == "") { //transition page
      //if (document.getElementById("answer1").style.display === "block") { // hide answer1 -is the guard necessary?
      document.getElementById("answer1").style.display = "none";
      //}
      // update answer2 positioning
      document.getElementById("answer2").style.bottom = middleButtonPosition;
    } else {
      //if (document.getElementById("answer1").style.display === "none") { // show answer1
      document.getElementById("answer1").style.display = "block";
      //}
      //change text for answer 1
      document.getElementById("answer1").innerHTML = currQuestion.answers[0].text;
      //update answer2 positioning
      document.getElementById("answer2").style.bottom = secondButtonPosition;
    }
    let newWidth = (questionCounter+1)/maxQuestionNumber * 100;
    //progress bar
    document.getElementById("progress").style.width = newWidth + "%";
    //progress sprite
    document.getElementById("progress sprite").style.left = newWidth * 0.8 + "%";
    document.getElementById("image").src = imagePath + questionCounter + ".png";
    document.getElementById("question").innerHTML = currQuestion.question;
    document.getElementById("answer2").innerHTML = currQuestion.answers[1].text;
    //foreground sprite
    //(assume same dimensions and # of frames for each spritesheet)
    document.getElementById("foreground sprite").style.backgroundImage = "url('" + imagePath + questionCounter + "sprite.png')";
    if (currQuestion.hasOwnProperty("foregroundSprite")) {
      if (currQuestion.foregroundSprite.hasOwnProperty("isActive")) {
        if (!currQuestion.foregroundSprite.isActive) {
          document.getElementById("foreground sprite").style.display = "none";
        }
      } else {
        document.getElementById("foreground sprite").style.display = "block";
      }
      if (currQuestion.foregroundSprite.hasOwnProperty("position")) {
        //TODO: POSSIBLY ADJUST TO ADD TO STYLE.CSS POSITIONS - DIFF WEB RESPONSIVENESS
        document.getElementById("foreground sprite").style.top = currQuestion.foregroundSprite.position[0];
        document.getElementById("foreground sprite").style.left = currQuestion.foregroundSprite.position[1];
      } else {
        document.getElementById("foreground sprite").style.top = defaultSpriteTop;
        document.getElementById("foreground sprite").style.left = defaultSpriteLeft;
      }
    } else {
      document.getElementById("foreground sprite").style.display = "block";
      document.getElementById("foreground sprite").style.top = defaultSpriteTop;
      document.getElementById("foreground sprite").style.left = defaultSpriteLeft;
    }
  } else {
    window.location.href = "../pages/click for results.html";
  }

}

const answer1Handler = () => {
  console.log("answer 1 handler");
  let currQuestion = questionObject[questionCounter];
  let mbti = currQuestion.mbti;
  let value = currQuestion.answers[0].value;
  if (currQuestion.answers[0].hasOwnProperty("fork")) {
    theme = currQuestion.answers[0].fork;
    sessionStorage.setItem("theme", theme);
  }
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
    //transition page, do nothing
  }
  displayQuestion();
}

const answer2Handler = () => {
  console.log("answer 2 handler");
  let currQuestion = questionObject[questionCounter];
  let mbti = currQuestion.mbti;
  let value = currQuestion.answers[1].value;
  if (currQuestion.answers[1].hasOwnProperty("fork")) {
    theme = currQuestion.answers[1].fork;
    sessionStorage.setItem("theme", theme);
  }
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
    //transition page, do nothing
  }
  displayQuestion();
}