function updateTimer() {
    //set initial countdown date
    var countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 11); // 10 days from now
     
  var x = setInterval(function() {
      //get current date and time
     var now = new Date().getTime();
      
      // calculate the distance between now and countdown date
     var distance = countDownDate.getTime() - now;

     // Update the elements by thier  respective IDs
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

     //Display the count down
     document.getElementById("days").innerHTML = days;
     document.getElementById("hours").innerHTML = hours;
     document.getElementById("minutes").innerHTML = minutes;
     document.getElementById("seconds").innerHTML = seconds;

       //If the count down is over, reset the countdown after 10days
       if  (distance < 0) {
          clearInterval(x);
          countDownDate.setDate(countDownDate.getDate() + 11); // 10 days from now
          updatetimer(); //Restart timer
        }
    }, 1000);
}
//call function to start countdown timer
updateTimer();
