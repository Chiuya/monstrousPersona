// Select all elements with the class '.fade-in'
let fadeIns = document.querySelectorAll('.fade-in');

// Create Intersection Observer for each element
fadeIns.forEach(element => {
  let observer = new IntersectionObserver((entries, observer) => {
    // Loop through entries
    entries.forEach((entry) => {
      // Check to see if element is visible
      if (entry.isIntersecting) {
        // Fade in element when it is visible
        entry.target.classList.add('in-view');
        // Stop observing the element
        observer.unobserve(entry.target);
      }
    });
  });

  // Observe the current element
  observer.observe(element);
});


/*results functions*/
//If negative value, take the left result, if positive take the right
let ei = 0; /*extroverted vs. introverted*/
let sn = 0; /*sensing vs. intuition*/
let tf = 0; /*thinking vs. feeling*/
let jp = 0; /*judging vs. perceiving*/

/*get ../result pages/path.html for results (path from question pages)*/
const getResultPath = () => {
  let result = '../result pages/';
  if (ei < 0) {
    result += 'e';
  } else {
    result += 'i';
  }
  if (sn < 0) {
    result += 's';
  } else {
    result += 'n';
  }
  if (tf < 0) {
    result += 't';
  } else {
    result += 'f';
  }
  if (jp < 0) {
    result += 'j';
  } else {
    result += 'p';
  }
  return result += '.html';
};

//Log the current result string
const logResultString = () => {
  console.log(getResultPath());
};

/*function to add to tally for results*/
// Event listeners for buttons, one per letterpair?
document.getElementById('ei-incr').addEventListener('click', () => {
  ei++;
  console.log('ei++');
});

document.getElementById('ei-dec').addEventListener('click', () => {
  ei--;
  console.log('ei--');
});


document.getElementById('sn-incr').addEventListener('click', () => {
  sn++;
  console.log('sn++');
});

document.getElementById('sn-dec').addEventListener('click', () => {
  sn--;
  console.log('sn--');
});


document.getElementById('tf-incr').addEventListener('click', () => {
  tf++;
  console.log('tf++');
});

document.getElementById('tf-dec').addEventListener('click', () => {
  tf--;
  console.log('tf--');
});


document.getElementById('jp-incr').addEventListener('click', () => {
  jp++;
  console.log('jp++');
});

document.getElementById('jp-dec').addEventListener('click', () => {
  jp--;
  console.log('jp--');
});