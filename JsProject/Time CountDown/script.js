//++++++++++++++++++ targets ++++++++++++++++++++++++

const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
let interval;

start.addEventListener("click", () => {
  setRight();
  Timer();
  if ((hours.value >= 0 || minutes.value >= 0) && seconds.value > 0) {
    start.style.display = "none";
    stop.style.display = "block";
    interval = setInterval(() => {
      Timer();
      seconds.value = `${seconds.value <= 10 ? "0" : ""}${seconds.value - 1}`;
    }, 1000);
  }
});

stop.addEventListener("click", () => {
  clearInterval(interval);
  start.style.display = "block";
  stop.style.display = "none";
});

reset.addEventListener("click", () => {
  start.style.display = "block";
  stop.style.display = "none";
  clearInterval(interval);
  hours.value = minutes.value = seconds.value = "";
});

function setRight() {
  if (parseInt(seconds.value) > 59) {
    minutes.value =
      minutes.value != ""
        ? parseInt(minutes.value)
        : 0 + Math.floor(parseInt(seconds.value) / 60);
    seconds.value = parseInt(seconds.value) % 60;
  }
  if (parseInt(minutes.value) > 59) {
    hours.value =
      hours.value != ""
        ? parseInt(hours.value)
        : 0 + Math.floor(parseInt(minutes.value) / 60);
    minutes.value = parseInt(minutes.value) % 60;
  }
}
function Timer() {
  if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
    clearInterval(interval);
    hours.value = minutes.value = seconds.value = "";
    stop.style.display = "none";
    start.style.display = "block";
    return;
  } else if (seconds.value == 0 && (minutes.value > 0 || hours.value > 0)) {
    if (minutes.value > 0) {
      minutes.value -= 1;
      seconds.value = 60;
    } else {
      hours.value -= 1;
      minutes.value = 59;
      seconds.value = 60;
    }
  }
}

console.log(parseInt(minutes.value));
