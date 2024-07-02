// ++++++++++++++++++ Element Selectors ++++++++++++++++++++++++

// Select HTML elements by their IDs
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

// Variable to store the interval ID
let interval;

// ++++++++++++++++++ Event Listeners ++++++++++++++++++++++++

// Event listener for the 'Start' button
start.addEventListener("click", () => {
  try {
    if(minutes.value < 0 || seconds.value < 0 || hours.value < 0){
    hours.value = minutes.value = seconds.value = ""; // Reset all time values
    hours.value = minutes.value = seconds.value = ""; // Reset all time values
    return ;
    }
    setRight(); // Adjust the values correctly
    Timer(); // Check if timer should stop immediately

    // Start the timer if at least one of the time values is positive
    if ((hours.value >= 0 || minutes.value >= 0) && seconds.value > 0) {
      start.style.display = "none";
      stop.style.display = "block";

      interval = setInterval(() => {
        Timer(); // Check and update the timer values
        // Update the seconds value and display it correctly
        seconds.value = `${seconds.value <= 10 ? "0" : ""}${seconds.value - 1}`;
      }, 1000); // Execute every second
    }
  } catch (error) {
    console.log(error); // Log the error
    throw error; // Rethrow the error
  }
});

// Event listener for the 'Stop' button
stop.addEventListener("click", () => {
  clearInterval(interval); // Stop the interval
  start.style.display = "block";
  stop.style.display = "none";
});

// Event listener for the 'Reset' button
reset.addEventListener("click", () => {
  start.style.display = "block";
  stop.style.display = "none";
  clearInterval(interval); // Clear the interval
  hours.value = minutes.value = seconds.value = ""; // Reset all time values
});

// ++++++++++++++++++ Helper Functions ++++++++++++++++++++++++

// Function to adjust the time values correctly
function setRight() {
  let secval = parseInt(seconds.value);

  // Adjust minutes if seconds are more than 59
  if (parseInt(minutes.value) != 0 && seconds.value != 0)
    minutes.value = parseInt(minutes.value) + Math.floor(secval / 60);

  // Set minutes if initial value is zero
  if (minutes.value == 0) minutes.value = Math.floor(secval / 60);

  // Set the remaining seconds value
  seconds.value = secval % 60;

  // Adjust hours if minutes are more than 59
  if (minutes.value != 0 && parseInt(minutes.value) > 60) {
    if (hours.value != 0)
      hours.value = parseInt(hours.value) + Math.floor(parseInt(minutes.value) / 60);

    if (hours.value == 0)
      hours.value = Math.floor(parseInt(minutes.value) / 60);

    minutes.value = parseInt(minutes.value) % 60;
  }
}

// Function to manage the countdown timer
function Timer() {
  // If all values are zero, stop the timer
  if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
    clearInterval(interval);
    hours.value = minutes.value = seconds.value = ""; // Reset all time values
    stop.style.display = "none";
    start.style.display = "block";
    return;
  } 
  // If seconds are zero but there are minutes or hours left
  else if (seconds.value == 0 && (minutes.value > 0 || hours.value > 0)) {
    if (minutes.value > 0) {
      minutes.value -= 1;
      seconds.value = 60; // Reset seconds to 60
    } 
    // If minutes are zero but there are hours left
    else {
      hours.value -= 1;
      minutes.value = 59; // Set minutes to 59
      seconds.value = 60; // Set seconds to 59
    }
  }
}

console.log(parseInt(minutes.value));
