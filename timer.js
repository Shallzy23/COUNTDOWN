function updateTimer() {
    var endDate = new Date("february 28, 2024 11:40:00").getTime();
     
  var x = setInterval(function() {
     var now = new Date().getTime();
     var distance = endDate - now;

     // Update the elements by thier  respective IDs
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);


     document.getElementById("days").innerHTML = days;
     document.getElementById("hours").innerHTML = hours;
     document.getElementById("minutes").innerHTML = minutes;
     document.getElementById("seconds").innerHTML = seconds;


       if  (distance < 0) {
          clearInterval(x);
          countdown = new Date();
          countdown.setDate(countdown.getDate() + 10)
        }
    }, 1000);
}
updateTimer();