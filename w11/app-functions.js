// Save the final output to localStorage
const saveFinalOutput = (finalOutputs) => {
  localStorage.setItem('decision', JSON.stringify(finalOutputs));
};

// Get final output from storage
const getSavedFinalOutput = (finalOutputs) => {
    const finalOutputJSON = localStorage.getItem('decision');
    return finalOutputJSON ? JSON.parse(finalOutputJSON) : []; // used a truthy/falsy 
  };

const removeResult = (id) => {
    const resultIndex = finalOutputs.findIndex((finalOutputs) => finalOutputs.id === id); // Able to use short hand syntax because only returning a single item
    if (resultIndex > -1) {
      finalOutputs.splice(resultIndex, 1)
    }
  };

// Function which recieves a day and returns true if it is the weekend
// and false if it is not the weekend.
// Need to see if I can implement truthy/falsy here 
const isWeekend = (day) => {
    if (day === 'Friday' || day === 'Saturday') {
      dataSet.weekend = true
    }
    else {
     dataSet.weekend = false
    }
  return dataSet.weekend
    }

// Function takes object from the submission, modifies the object
// Cannot use shorthand syntax for arrow function here
const runData = (object) => {
        let freeTime = object.kidsBedtime - object.currentTime
        let weekend = isWeekend(dataSet.dayOfWeek)
        let day = object.dayOfWeek
        let decisionObject = determineOutput(freeTime, object.homeworkDone, weekend, object.id, day, object.createdAt)
        
        finalOutputs.push(decisionObject)
      
      }

const determineOutput = (freeTime, homeworkDone, weekend, id, day, createdAt) => {
  
        if (homeworkDone && weekend) {
          verdict = 'It is the weekend!!!'
          message = 'Order a pizza and have a gaming night'
          list = 'Nothing needs to be done'
        }
        else if (!weekend && homeworkDone && freeTime >= .51) {
          verdict = 'It is a school night but homework is done!'
          message = `You can play for ${freeTime} hours`
          list = 'Nothing needs to be done'
        }
        else if (!weekend && homeworkDone && freeTime < .51) {
          verdict = `There is only ${freeTime} hours left before bedtime`
          message = 'That is not enough time for gaming.'
          list = 'Have the kids brush their teeth and read them a story'
        }
        else if (weekend && !homeworkDone) {
          verdict = 'No, it is the weekend but you found out the kids have a homework assignment!'
          message = 'They need to finish their homework before you can play'
          list = 'Do homework, eat dinner, and have the kids brush their teeth'
        }
        else {
          verdict = 'No!, it is a school night and the kids have not done homework.'
          message = 'They need to finish all homework before their bedtime'
          list = 'Do homework, eat dinner, and have the kids brush their teeth'
        }
        return {verdict, message, list, id, day, createdAt}
      };

      
const renderOutput = (object) => {
  document.querySelector('#output').innerHTML = '';
  document.querySelector('#user-validation').innerHTML = '';

  // const messageCount = finalOutputs.length;

  if (finalOutputs.length > 0) {
    finalOutputs.forEach ((finalOutput) => {
      document.querySelector('#output').appendChild(generateMessageDom(finalOutput));
    });
  };
}
      
      
const generateMessageDom = (finalOutput) => {
  const finalOutputElement = document.createElement('div');
  const verdictElement = document.createElement('h3')
  const messageElement = document.createElement('p');
  const button = document.createElement('button')
  const editButton = document.createElement('button')
  const createElement = document.createElement('h4')


  verdictElement.textContent = finalOutput.verdict
  messageElement.textContent = finalOutput.message
  createElement.textContent = moment.unix(finalOutput.createdAt)
  finalOutputElement.appendChild(verdictElement)
  finalOutputElement.appendChild(messageElement)
  finalOutputElement.appendChild(createElement)
  button.textContent = 'Delete';
  finalOutputElement.appendChild(button);
  editButton.textContent = 'Edit'
  finalOutputElement.appendChild(editButton)
  editButton.addEventListener('click', () => {
    location.assign(`edit.html#${finalOutput.id}`);
  })
  button.addEventListener('click', () => {
    removeResult(finalOutput.id);
    saveFinalOutput(finalOutputs)
    renderOutput(finalOutputs)
  });
  return finalOutputElement;
}
    
// Generate the last edited message
const generateLastEdited = (timeStamp) => {
  return `Last edited ${moment(timeStamp).fromNow()}`;
};




  
// const button = document.createElement('button')
// button.textContent = 'Delete'


// const verdict = document.createElement('h3');
// verdict.textContent = `${e.verdict}`;
// document.querySelector('#output').appendChild(verdict)
// verdict.appendChild(button)
// button.addEventListener('click', () => {
//   removeResult(finalOutputs.id)
//   saveFinalOutput(finalOutputs)
//   renderOutput(finalOutputs)
// })

// const message = document.createElement('q');
// message.textContent = `${e.message}`;
// document.querySelector('#output').appendChild(message)

// const list = document.createElement('li');
// list.textContent = `${e.list}`;
// document.querySelector('#output').appendChild(list)
// }); 
// } else {
// const noData = document.createElement('h3');
// noData.textContent = 'Please enter data and submit';
// document.querySelector('#output').appendChild(noData)
// }
// };