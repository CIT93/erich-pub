
const finalOutput = [] 

let dataSet = {
  currentTime: 0,
  kidsBedtime: 0,
  dayOfWeek: '',
  homeworkDone: false,
  weekend: false,
  
}
let isWeekend = function (day) {
    
  if (day === 'Friday' || day === 'Saturday') {
    dataSet.weekend = true
  }
  else {
   dataSet.weekend = false
  }
return dataSet.weekend
  }

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  dataSet.currentTime = form.elements.currentTime.value;
  dataSet.kidsBedtime = form.elements.kidsBedtime.value;
  dataSet.dayOfWeek = form.elements.dayOfWeek.value;
  dataSet.homeworkDone = form.elements.homeworkDone.checked;
 
  runData(dataSet);
})
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('form').reset();
})

const runData = function (object) {
  let freeTime = object.kidsBedtime - object.currentTime
  let weekend = isWeekend(dataSet.dayOfWeek)
  let decisionObject = determineOutput(freeTime, object.homeworkDone, weekend)
  decisionObject.dayOfWeek = object.dayOfWeek
  finalOutput.push(decisionObject)
  renderOutput(finalOutput)
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

const renderOutput = function(obj) {
  document.querySelector('#output').innerHTML = '';
  if (finalOutput.length > 0) {
    finalOutput.forEach (function (e) {
      
      const verdict = document.createElement('h3');
      verdict.textContent = `${e.verdict}`;
      document.querySelector('#output').appendChild(verdict)

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
renderOutput(finalOutput)





  
