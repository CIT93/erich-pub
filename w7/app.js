
const dayOfWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

const gameDecision = {
  freeTime: 0,
  dayOfWeek: '',
  currentTime: 8,
  kidsBedtime: 12,
  isWeekend: true,
  homeworkDone: true,

  setWeekend: function (value) {
    this.isWeekend = value;
  },
  setHomeworkDone: function (value) {
    this.homeworkDone = value;
  },
  setDay: function (day) {
    this.dayOfWeek = day;
  },
  setTime: function (time) {
    this.currentTime = time;
  },
  determineKidsBedtime: function (day) {
    this.dayOfWeek = day;
    if (day === 'Friday' || 'Saturday') {
     
      this.kidsBedtime = 12;
    }
     else
     day === 'Monday' || 'Tuesday' || 'Wednesday' || 'Thursday' || 'Sunday';
    this.kidsBedtime = 9;
  },
  displayOut: function (time, bedtime, homework, weekend) {
    const freeTime = this.kidsBedtime - this.currentTime;
    const newHead = document.createElement('h1')
    newHead.textContent = 'The Output You See Is Based On This Variable Data:';
    document.querySelector('body').appendChild(newHead)
    const dataFields = [
    {text:'<:::::::::::::::::::::::::::::::::::::::::::::::::>'}, 
    {text:`Current Time >>>  ${this.currentTime}` },
    {text: `My Kids Bedtime >>> ${this.kidsBedtime}`},
    {text:`Are The Kids Done With Homework? >>> ${this.homeworkDone}`},
    {text:`Is it the weekend? >>> ${this.isWeekend}` },
    {text: '<::::::::::::::::::::::::::::::::::::::::::::::::>'  }]

    dataFields.forEach(function (field) {
      const p = document.createElement('h4')
      p.textContent = field.text
      document.querySelector('body').appendChild(p)
    })
  
  const newParagraph = document.createElement('h2')
  newParagraph.textContent = 'Should I go and play video games with my kids?'
  document.querySelector('body').appendChild(newParagraph)
  const newParagraph1 = document.createElement('h4')
  newParagraph1.textContent = '<::::::::::::::::::::::::::::::::::::::::::::::::>';
  document.querySelector('body').appendChild(newParagraph)

    const todayIs = document.createElement('p')
    todayIs.textContent = `Today is ${this.dayOfWeek}`;
    document.querySelector('body').appendChild(todayIs)
    const finalDecision = document.createElement('p')
    if (this.isWeekend && this.homeworkDone) {
      finalDecision.textContent ='Order some pizza and game on!!';
      document.querySelector('body').appendChild(finalDecision)
    } else if (
      this.isWeekend === false &&
      this.homeworkDone === true &&
      freeTime >= 0.51
    ) {
      finalDecision.textContent =`Yes, you can play for ${freeTime} hours`;
      document.querySelector('body').appendChild(finalDecision)
    } else if (
      this.isWeekend === false &&
      this.homeworkDone === true &&
      freeTime < 0.51
    ) {
      const finalDecision1 = document.createElement('p')
      finalDecision1.textContent =`There is only ${freeTime} hours before the kids go to bed`;
      document.querySelector('body').appendChild(finalDecision1)
      const finalDecision2 = document.createElement('p')
      finalDecision2.textContent =
        'That is not enough time for video games. Have the kids brush their teeth, and read them a story instead'
      ;
      document.querySelector('body').appendChild(finalDecision2)
      finalDecision.textContent ='You will have more time on the weekend';
      document.querySelector('body').appendChild(finalDecision)
    } else if (this.isWeekend === true && this.homeworkDone === false) {
      finalDecision.textContent = 'You found out the kids had a weekend assignment';
      document.querySelector('body').appendChild(finalDecision)
      finalDecision.textContent = 'The kids need to do thier homework before playing';
      document.querySelector('body').appendChild(finalDecision)
    } else {
      const finalDecision1 = document.createElement('p')
      finalDecision1.textContent = 'No, it is a school night and the kids have homework!';
      document.querySelector('body').appendChild(finalDecision1)
      finalDecision.textContent =
        `They need to finish before their bedtime at ${this.kidsBedtime}`
      ;
      document.querySelector('body').appendChild(finalDecision)
    }
    
  }

};
document.querySelector('button').addEventListener('click', function (e) {
      gameDecision.displayOut(
      gameDecision.setTime(8.5),
      gameDecision.determineKidsBedtime(dayOfWeek[2]),
      gameDecision.setHomeworkDone(true),
      gameDecision.setWeekend(false)
    )
})



