let hour = document.getElementById("hour");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

let day = document.getElementById("day");
let dateStr = document.getElementById("date");
let meridiem = document.getElementById("meridiem");

function setTime() {
  let dateObj = new Date();

  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  let seconds = dateObj.getSeconds();

  let weekDay = dateObj.getDay();

  let year = dateObj.getFullYear(); //(2023)
  let month = dateObj.getMonth(); // (0-11)
  let date = dateObj.getDate(); // (1-31)

  hour.textContent = format(hours);
  mins.textContent = format(minutes);
  secs.textContent = format(seconds);

  day.textContent = returnDay(weekDay);
  dateStr.textContent = format(date) + "/" + format(month) + "/" + year;
  meridiem.textContent = hour < 12 ? "AM" : "PM";
}
function returnDay(n) {
  possibleDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednessday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return possibleDays[n];
}

let format = (n) => (n < 10 ? "0" + n : n);
setInterval(setTime, 1000); // 1000ms (1 second)
