const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
}

  // My Daily Decision 
  // One of my common daily decisions is whether I can play video games with my kids
  // many conditions can influence this so I thought it would be fun to code this.

  let currentTime = 8.5
  let isWeekend = false
  let isKidsHomeworkDone = true
  let isWifeHome = false
  var kidsBedtime
    if (isWeekend) {
      kidsBedtime = 12
     }
     else {
     kidsBedtime = 9
     }
  
  let freeTime = kidsBedtime - currentTime
  
 showOnPage('<b>The Output You See Is Based On This Global Variable Data:</b>')
 showOnPage('For the time: Ex.. 9 = 9:00, 8.5 = 8:30')
 showOnPage('Current Time >>> ' + currentTime)
 showOnPage('My Kids Bedtime >>> ' + kidsBedtime)
 showOnPage('Is it the weekend? >>> ' + isWeekend)
 showOnPage('Are The Kids Done With Homework? >>> ' + isKidsHomeworkDone)
 showOnPage('Is my wife at home? >>> ' + isWifeHome)
 showOnPage('<================================================>')
 showOnPage('//This is the end of the Global inputs')
 showOnPage('<================================================>')
 showOnPage('//Here is a local variable, the value is determined by the global inputs.')
 showOnPage('<================================================>')
// Local Variable is created and assigned its value
 if (isWeekend) {
  let whereIsWife = 'at work' 
   showOnPage('Where is my wife? >>> ' + whereIsWife)
} else if (isWeekend === false && isWifeHome) {
   whereIsWife = 'at home'
   showOnPage('Where is my wife? >>> ' + whereIsWife) 
} else {
   whereIsWife = 'at work'
   showOnPage('Where is my wife? >>> ' + whereIsWife)
}
showOnPage('<================================================>')
showOnPage('<b>Here is the final output of the program based on all the conditions:</b>')
showOnPage('Should I go and play video games with my kids?')
// The final output gets determined based on these conditions
if (isWeekend && isKidsHomeworkDone) {
  showOnPage('Order some pizza and game on!!')
} else if (isWeekend === false && (isKidsHomeworkDone === true && freeTime >= .51)) {
  showOnPage('Yes, you can play for ' + freeTime + ' hours')
} else if (isWeekend === false && isKidsHomeworkDone === true && freeTime < .51) {
  showOnPage('There is only ' + freeTime + ' hours before the kids go to bed')
  showOnPage('That is not enought time for video games. Have the kids brush their teeth, and read them a story instead')
  showOnPage('You will have more time on the weekend')
} else if (isWeekend === true && isKidsHomeworkDone === false) {
  showOnPage('You found out the kids had a weekend assignment')
  showOnPage('The kids need to do thier homework before playing')
} else {
  showOnPage('No, it is a school night and the kids have homework!')
  showOnPage('They need to finish before thier bedtime at '+ kidsBedtime)
}
showOnPage('<================================================>')
showOnPage('Thanks for checking out my code!')
showOnPage('||0|| Have a happy day ||0||')
