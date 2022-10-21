
const finalOutputs = getSavedFinalOutput();

let dataSet = {
  id: '',
  currentTime: 0,
  kidsBedtime: 0,
  dayOfWeek: '',
  homeworkDone: false,
  weekend: false,
  createdAt: '',
}

const errorDOM = document.createElement('h3')

document.querySelector('form').addEventListener('submit', (e) => {
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
      const timeStamp = moment().unix()
      // console.log(moment(nowTimestamp).toString())
      const id = uuidv4()
      dataSet.createdAt = timeStamp;
      dataSet.id = id;
  runData(dataSet);
  saveFinalOutput(finalOutputs)
  renderOutput(finalOutputs)
  document.getElementById('form').reset();
    }
})


renderOutput(finalOutputs) // Initial render to screen





  
