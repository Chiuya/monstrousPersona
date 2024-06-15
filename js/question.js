/*results functions*/
//If negative value, take the left result, if positive take the right
let ei = 0; /*extroverted vs. introverted*/
let sn = 0; /*sensing vs. intuition*/
let tf = 0; /*thinking vs. feeling*/
let jp = 0; /*judging vs. perceiving*/

document.addEventListener('DOMContentLoaded', () => {
  ei = parseInt(sessionStorage.getItem('ei')) || 0;
  sn = parseInt(sessionStorage.getItem('sn')) || 0;
  tf = parseInt(sessionStorage.getItem('tf')) || 0;
  jp = parseInt(sessionStorage.getItem('jp')) || 0;
  /*get ../result pages/path.html for results (path from question pages)*/
  const getResultPath = () => {
    let result = '../result pages/';
    result += ei < 0 ? 'e' : 'i';
    result += sn < 0 ? 's' : 'n';
    result += tf < 0 ? 't' : 'f';
    result += jp < 0 ? 'j' : 'p';
    return result + '.html';
  };

  const linkElement = document.getElementById("results-button");

  // Check if the element exists
  if (linkElement) {
    console.log("ei init value check: ", ei);
    // Set the href attribute using the function
    linkElement.href = getResultPath();
    // clear results values 
    sessionStorage.clear();
    console.log("ei reset value check: ", ei);
  } else {
    console.warn('Element with ID "result-link" not found.');
  }
});
//Log the current result string
const logResultString = () => {
  console.log(getResultPath());
};

/*function to add to tally for results*/
// Event listeners for buttons, one per letterpair
if (document.getElementById('ei-incr')) {
  console.log('ei question');
  document.getElementById('ei-incr').addEventListener('click', () => {
    ei++;
    sessionStorage.setItem('ei', ei);
    //console.log('ei++');
  });
  document.getElementById('ei-dec').addEventListener('click', () => {
    ei--;
    sessionStorage.setItem('ei', ei);
    //console.log('ei--');
  });
}

if (document.getElementById('sn-incr')) {
  console.log('sn question');
  document.getElementById('sn-incr').addEventListener('click', () => {
    sn++;
    sessionStorage.setItem('sn', sn);
    //console.log('sn++');
  });
  
  document.getElementById('sn-dec').addEventListener('click', () => {
    sn--;
    sessionStorage.setItem('sn', sn);
    //console.log('sn--');
  });
}


if (document.getElementById('tf-incr')) {
  console.log('tf question');
  document.getElementById('tf-incr').addEventListener('click', () => {
    tf++;
    sessionStorage.setItem('tf', tf);
    //console.log('tf++');
  });

  document.getElementById('tf-dec').addEventListener('click', () => {
    tf--;
    sessionStorage.setItem('tf', tf);
    //console.log('tf--');
  });
}

if (document.getElementById('jp-incr')) {
  console.log('jp question');
  document.getElementById('jp-incr').addEventListener('click', () => {
    jp++;
    sessionStorage.setItem('jp', jp);
    //console.log('jp++');
  });
  
  document.getElementById('jp-dec').addEventListener('click', () => {
    jp--;
    sessionStorage.setItem('jp', jp);
    //console.log('jp--');
  });
}