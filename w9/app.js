
const finalOutput = getFinalOutput();

let dataSet = {
  currentTime: 0,
  kidsBedtime: 0,
  dayOfWeek: '',
  homeworkDone: false,
  weekend: false,
  id: ''
}

const errorDOM = document.createElement('h3')

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  let errorMessage = []
    dataSet.currentTime = form.elements.currentTime.value;
    dataSet.kidsBedtime = form.elements.kidsBedtime.value;
    dataSet.dayOfWeek = form.elements.dayOfWeek.value;
    dataSet.homeworkDone = form.elements.homeworkDone.checked;
    if (dataSet.currentTime === '0' || dataSet.kidsBedtime === '0' || dataSet.dayofWeek === '0'){
    errorMessage.push ('You must enter data to run the program')
    errorDOM.textContent = errorMessage
    document.querySelector("#user-validation").appendChild(errorDOM)
    } else {
  runData(dataSet);
  saveFinalOutput(finalOutput)
    }
})
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('form').reset();
})

renderOutput(finalOutput)





  
