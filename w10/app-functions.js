const getFinalOutput = function (finalOutput) {
    const finalOutputJSON = localStorage.getItem('decision');
  
    if (finalOutputJSON !== null) {
      return JSON.parse(finalOutputJSON);
    } else {
      return [];
    }
  };

// Save the final output to localStorage

const saveFinalOutput = function (finalOutput) {
    localStorage.setItem('decision', JSON.stringify(finalOutput));
  };

const removeResult = function (id) {
  const finalOutput = getFinalOutput();
    const resultIndex = finalOutput.findIndex(function (object) {
      return object.id === id
    })
    if (resultIndex > -1) {
      finalOutput.splice(resultIndex, 1)
      saveFinalOutput(finalOutput)
      renderOutput(finalOutput)
    }
  }


// Function which recieves a day and returns true if it is the weekend
// and false if it is not the weekend.

const isWeekend = function (day) {
    
    if (day === 'Friday' || day === 'Saturday') {
      dataSet.weekend = true
    }
    else {
     dataSet.weekend = false
    }
  return dataSet.weekend
    }

// Function takes object from the submission, modifies the object
const runData = function (object) {
        let freeTime = object.kidsBedtime - object.currentTime
        let weekend = isWeekend(dataSet.dayOfWeek)
    
        let decisionObject = determineOutput(freeTime, object.homeworkDone, weekend)
        const id = uuidv4()
        
        decisionObject.dayOfWeek = object.dayOfWeek
        decisionObject.id = id
        finalOutput.push(decisionObject)
      
      }

const determineOutput = function (freeTime, homeworkDone, weekend) {
  
        if (homeworkDone && weekend) {
          verdict = 'It is the weekend!!!'
          message = 'Order a pizza and have a gaming night'
          list = 'Nothing needs to be done'
          list1 = ''
          list2 = ''
        }
        else if (!weekend && homeworkDone && freeTime >= .51) {
          verdict = 'It is a school night but homework is done!'
          message = `You can play for ${freeTime} hours`
          list = 'Nothing needs to be done'
          list1 = ''
          list2 = ''
        }
        else if (!weekend && homeworkDone && freeTime < .51) {
          verdict = `There is only ${freeTime} hours left before bedtime`
          message = 'That is not enough time for gaming.'
          list = 'Have the kids brush their teeth'
          list1 = 'Read them a story' 
          list2 = ''
        }
        else if (weekend && !homeworkDone) {
          verdict = 'No, it is the weekend but you found out the kids have a homework assignment!'
          message = 'They need to finish their homework before you can play'
          list = 'Do homework'
          list1 = 'Eat dinner'
          list2 = 'Brush teeth'
        }
        else {
          verdict = 'No!, it is a school night and the kids have not done homework.'
          message = 'They need to finish all homework before their bedtime'
          list = 'Do homework'
          list1 = 'Eat dinner'
          list2 = 'Brush teeth'
        }
        return {verdict, message, list, list1, list2}
      };

      
const renderOutput = function(object) {
  document.querySelector('#output').innerHTML = '';
  document.querySelector('#list-output').innerHTML = '';

  if (finalOutput.length > 0) {
    finalOutput.forEach (function (e) {
      
      const button = document.createElement('button')
      button.textContent = 'Delete'


      const verdict = document.createElement('h3');
      verdict.textContent = `${e.verdict}`;
      document.querySelector('#output').appendChild(verdict)
      verdict.appendChild(button)
      button.addEventListener('click', function () {
        removeResult(finalOutput.id)
        saveFinalOutput(finalOutput)
        renderOutput(finalOutput)
      })

      const message = document.createElement('q');
      message.textContent = `${e.message}`;
      document.querySelector('#output').appendChild(message)

      const list = document.createElement('li');
      list.textContent = `${e.list}`;
      document.querySelector('#list-output').appendChild(list)
      
      const list1 = document.createElement('li');
      list1.textContent = `${e.list1}`;
      document.querySelector('#list-output').appendChild(list1)

      const list2 = document.createElement('li');
      list2.textContent = `${e.list2}`;
      document.querySelector('#list-output').appendChild(list2)
    }); 
  } else {
    const noData = document.createElement('h3');
      noData.textContent = 'Please enter data and submit';
      document.querySelector('#output').appendChild(noData)
  }
};
      
  