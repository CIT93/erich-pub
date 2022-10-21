
const finalOutput = getFinalOutput();

let dataSet = {
  id: '',
  currentTime: 0,
  kidsBedtime: 0,
  dayOfWeek: '',
  homeworkDone: false,
  weekend: false,
 
}

const errorDOM = document.createElement('h3')

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  let errorMessage = []
    dataSet.currentTime = form.elements.currentTime.value;
    dataSet.kidsBedtime = form.elements.kidsBedtime.value;
    dataSet.dayOfWeek = form.elements.dayOfWeek.value;
    dataSet.homeworkDone = form.elements.homeworkDone.checked;
    if (dataSet.currentTime === '0' || dataSet.kidsBedtime === '0' || dataSet.dayOfWeek === '0'){
    errorMessage.push ('You must enter data to run the program')
    errorDOM.textContent = errorMessage
    document.querySelector("#user-validation").appendChild(errorDOM)
    } else {
  runData(dataSet);
  saveFinalOutput(finalOutput)
  renderOutput(finalOutput)
    }
})
document.querySelector('#cleardata').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('form').reset();
})

renderOutput(finalOutput) // Initial render to screen





  
