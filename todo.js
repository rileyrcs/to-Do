function startTimer() {
 var presentTime = document.getElementByClass('timer').innerHTML;
 var timeArray = presentTime.split(/[:]+/);
 var m = timeArray[0];
 var s = checkSecond((timeArray[1] - 1));
 if(s==00){m= m-1}
 if(m<0){alert('timer completed')}

 document.getElementById('timer').innerHTML =
   m + ":" + s;
 setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
 if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
 if (sec < 0) {sec = "59"};
 return sec;
}


var timeCard = $('.time-card');
var submit = $('.time-btn');
submit.on("click",createNewUser)

function createNewUser () {
  var countDown = $('.time').val();

  appendNewCountDown(countDown);
  $('.time').val("")
}

function appendNewCountDown(countDown) {
  timeCard.append (`${countDown}`)

  document.getElementById('timer').innerHTML =

  startTimer();
  countDown = $('.time').val("") + ":" + 00;
}


var cardContainer = $('.card-container');
var sumbit = $('.submit-btn');
sumbit.on("click",createNewUser);

function createNewUser () {
 var toDo = $('.homework').val();

  appendNewToDo(toDo);
  $('.homework').val("")
  }

function appendNewToDo(toDo) {
  cardContainer.append (`${toDo}`);
}
