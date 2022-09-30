
const dailyDecision = [] // Hold new decision objects

// Recieve data from a user through a form. Event Listener waits for a submit and sets data values accordingly
// An object is created with user data values and gets passed to function runData.
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  let userName = form.elements.firstName.value;
  let currentTime = form.elements.currentTime.value;
  let kidsBedtime = form.elements.kidsBedtime.value;
  let dayOfWeek = form.elements.dayOfWeek.value;
  let homeworkDone = form.elements.homeworkDone.checked;
  let isWeekend = form.elements.isWeekend.checked;
  let decision = {
    userName: userName,
    currentTime: currentTime,
    kidsBedtime: kidsBedtime,
    dayOfWeek: dayOfWeek,
    homeworkDone: homeworkDone,
    isWeekend: isWeekend,
  }

  runData(decision);
  document.getElementById('form').reset();
})

// Function which takes an object and uses its values to determine freeTime. 
// Creates a new object from user inputs and return value from the function determineOutput
// Pushes the new object to the array decisionObject.
// Calls renderOutput function to display the data
const runData = function (object) {
  let freeTime = object.kidsBedtime - object.currentTime
  let decisionObject = determineOutput(freeTime, object.homeworkDone, object.isWeekend)
  decisionObject.dayOfWeek = object.dayOfWeek
  dailyDecision.push(decisionObject)
  renderOutput(dailyDecision)
}

// Function which creates object elements of verdict, and message. They are passed back to the function runData
const determineOutput = function (freeTime, homeworkDone, isWeekend) {
  let verdict = ''
  let message = ''

  if (homeworkDone && isWeekend) {
    verdict = 'It is the weekend!!!'
    message = 'Order a pizza and have a gaming night'
  }
  else if (!isWeekend && homeworkDone && freeTime >= .51) {
    verdict = 'It is a school night but homework is done!'
    message = `You can play for ${freeTime} hours`
  }
  else if (!isWeekend && homeworkDone && freeTime < .51) {
    verdict = `There is only ${freeTime} hours left before bedtime`
    message = 'That is not enough time for gaming. Have the kids brush their teeth, and read them a story. You will have more time on the weekend.'
  }
  else if (isWeekend && !homeworkDone) {
    verdict = 'No, it is the weekend but you found out the kids have a homework assignment!'
    message = 'They need to finish their homework before you can play'
  }
  else {
    verdict = 'No!, it is a school night and the kids have not done homework.'
    message = 'They need to finish all homework before their bedtime'
  }
  return {verdict: verdict, message: message}
};

const renderOutput = function(dailyDecision) {
  document.querySelector('#output').innerHTML = '';
  if (dailyDecision.length > 0) {
    dailyDecision.forEach (function (element) {
      const dayEl = document.createElement('h1');
      dayEl.textContent = `${element.dayOfWeek}`;
      document.querySelector('#output').appendChild(dayEl)
      const verdictEl = document.createElement('h3');
      verdictEl.textContent = `${element.verdict}`;
      document.querySelector('#output').appendChild(verdictEl)
      const messageEl = document.createElement('h3');
      messageEl.textContent = `${element.message}`;
      document.querySelector('#output').appendChild(messageEl)
    }); 
  } else {
    const blankEl = document.createElement('h3');
      blankEl.textContent = 'Please enter data and submit';
      document.querySelector('#output').appendChild(blankEl)
  }
};
renderOutput(dailyDecision)





  
