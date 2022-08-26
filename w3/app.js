const showOnPage = function (text) {
  let newParagraph = document.createElement('p');
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById('output');
  outputDiv.append(newParagraph);
};

let isWeekend = false;

let determineKidsBetime = function () {
  let kidsBedtime = 9;
  if (isWeekend) {
    kidsBedtime = 12;
  }
  return kidsBedtime;
};
let displayOut = function (currentTime, kidsBedtime, homeworkDone, isWeekend) {
  let freeTime = kidsBedtime - currentTime;
  showOnPage('<b>The Output You See Is Based On This Variable Data:</b>');
  showOnPage('<b><:::::::::::::::::::::::::::::::::::></b>');
  showOnPage('Current Time >>> ' + currentTime);
  showOnPage('My Kids Bedtime >>> ' + kidsBedtime);
  showOnPage('Are The Kids Done With Homework? >>> ' + homeworkDone);
  showOnPage('Is it the weekend? >>> ' + isWeekend);
  showOnPage('<b><:::::::::::::::::::::::::::::::::::></b>');
  showOnPage('Should I go and play video games with my kids?');
  showOnPage('<b><:::::::::::::::::::::::::::::::::::></b>');
  if (isWeekend && homeworkDone) {
    showOnPage('Order some pizza and game on!!');
  } else if (isWeekend === false && homeworkDone === true && freeTime >= 0.51) {
    showOnPage('Yes, you can play for ' + freeTime + ' hours');
  } else if (isWeekend === false && homeworkDone === true && freeTime < 0.51) {
    showOnPage(
      'There is only ' + freeTime + ' hours before the kids go to bed'
    );
    showOnPage(
      'That is not enought time for video games. Have the kids brush their teeth, and read them a story instead'
    );
    showOnPage('You will have more time on the weekend');
  } else if (isWeekend === true && homeworkDone === false) {
    showOnPage('You found out the kids had a weekend assignment');
    showOnPage('The kids need to do thier homework before playing');
  } else {
    showOnPage('No, it is a school night and the kids have homework!');
    showOnPage('They need to finish before thier bedtime at ' + kidsBedtime);
  }
  showOnPage('<b><:::::::::::::::::::::::::::::::::::></b>');
};

let bedTime = determineKidsBetime();
displayOut(8.5, bedTime, true, false);
displayOut(7, bedTime, false, true);
displayOut(8, bedTime, false, false);
