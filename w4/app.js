const showOnPage = function (text) {
  let newParagraph = document.createElement('p');
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById('output');
  outputDiv.append(newParagraph);
};


const gameDecision = {
  freeTime: 0,
  dayOfWeek: '',
  currentTime: 8,
  kidsBedtime: 12,
  isWeekend: true,
  homeworkDone: true,
 
setWeekend: function(value){
    this.isWeekend = value
},
setHomeworkDone: function(value) {
    this.homeworkDone = value
 },
setDay: function(day) {
   this.dayOfWeek = day
},
setTime: function (time){
  this.currentTime = time
},
determineKidsBedtime: function(day) {
  this.dayOfWeek = day 
  if (day === 'Friday' || 'Saturday'){
   // this.isWeekend = true;
    this.kidsBedtime = 12;
  //  return this.kidsBedtime;
  }
  else (day === 'Monday'||'Tuesday'||'Wednesday'||'Thursday'||'Sunday')
  //  this.isWeekend = false; 
    this.kidsBedtime = 9;

  //  return this.kidsBedtime;
  },
  displayOut: function (time, bedtime, homework, weekend) {
    let freeTime = this.kidsBedtime - this.currentTime;
    showOnPage('<h1>The Output You See Is Based On This Variable Data:</h1>');
    showOnPage('<b><:::::::::::::::::::::::::::::::::::></b>');
    showOnPage(`Current Time >>>  ${this.currentTime}`);
    showOnPage(`My Kids Bedtime >>> ${this.kidsBedtime}`);
    showOnPage(`Are The Kids Done With Homework? >>> ${this.homeworkDone}`);
    showOnPage(`Is it the weekend? >>> ${this.isWeekend}`);
    showOnPage('<b><:::::::::::::::::::::::::::::::::::></b>');
    showOnPage('Should I go and play video games with my kids?');
    showOnPage('<b><:::::::::::::::::::::::::::::::::::></b>');
    if (this.isWeekend && this.homeworkDone) {
      showOnPage('Order some pizza and game on!!');
    } else if (this.isWeekend === false && this.homeworkDone === true && freeTime >= 0.51) {
      showOnPage(`Yes, you can play for ${freeTime} hours`);
    } else if (this.isWeekend === false && this.homeworkDone === true && freeTime < 0.51) {
      showOnPage(
        `There is only ${freeTime} hours before the kids go to bed`
      );
      showOnPage(
        'That is not enought time for video games. Have the kids brush their teeth, and read them a story instead'
      );
      showOnPage('You will have more time on the weekend');
    } else if (this.isWeekend === true && this.homeworkDone === false) {
      showOnPage('You found out the kids had a weekend assignment');
      showOnPage('The kids need to do thier homework before playing');
    } else {
      showOnPage('No, it is a school night and the kids have homework!');
      showOnPage(`They need to finish before thier bedtime at ${this.kidsBedtime}`);
    }
    showOnPage('<b><:::::::::::::::::::::::::::::::::::></b>');
  }
}
gameDecision.displayOut(gameDecision.setTime(7),gameDecision.determineKidsBedtime('Monday'),gameDecision.setHomeworkDone(false),gameDecision.setWeekend(false));
gameDecision.displayOut(gameDecision.setTime(8.5),gameDecision.determineKidsBedtime('Tuesday'),gameDecision.setHomeworkDone(true),gameDecision.setWeekend(false));
gameDecision.displayOut(gameDecision.setTime(6),gameDecision.determineKidsBedtime('Saturday'),gameDecision.setHomeworkDone(true),gameDecision.setWeekend(true));


//gameDecision.setDay('Monday')
//showOnPage(gameDecision.dayOfWeek)

//showOnPage(gameDecision.determineKidsBedtime('Saturday'))
//showOnPage(gameDecision.dayOfWeek)
