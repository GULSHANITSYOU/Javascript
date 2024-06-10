//+++++++ Tagerts +++++++++

const form = document.querySelector(".inputfield");
const password = document.querySelector("#Password");
const copybutton = document.querySelector("#copyButton");
const rangeInput = document.querySelector("#range");
const rangelength = document.querySelector(".length");
const allowNumber = document.querySelector("#allowNumber");
const allowCharcter = document.querySelector("#allowCharcter");

let isNumberAllowd = false;
let isCharcterAllowd = false;
let lengthOfPassword = rangeInput.value;

// ++++++++++++++ form preventin default on submit +++++++++++
form.addEventListener("submit", (e) => e.preventDefault());

//++++++++++++ copy button action (copy on clipbord and selcted) +++++++

copybutton.addEventListener("click", () => {
  password.focus();
  password.select();
  navigator.clipboard.writeText(password.value);
});

//+++++++++++++ range input event ++++++++++++++==

rangeInput.addEventListener("input", (e) => {
  lengthOfPassword = e.target.value;
  passwordGenrater(lengthOfPassword, isCharcterAllowd, isNumberAllowd);
});

//+++++++++++++ number allowd or not input event ++++++++
allowNumber.addEventListener("input", (e) => {
  isNumberAllowd = e.target.checked;
  passwordGenrater(lengthOfPassword, isCharcterAllowd, isNumberAllowd);
});

//+++++++++++++ charcter allowd or not input event ++++++++
allowCharcter.addEventListener("input", (e) => {
  isCharcterAllowd = e.target.checked;
  passwordGenrater(lengthOfPassword, isCharcterAllowd, isNumberAllowd);
});

//++++++++++++++++++++++ password genrater ++++++++++++

function passwordGenrater(length, charcter, numbers) {
  let arr = "abcdefghijklmnopqrstuvqxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let pss = "";

  if (charcter) arr += "!#@$%^&*()_+}{][|/.,?><`~";

  if (numbers) arr += "1234567890";

  for (let i = 0; i < length; i++) {
    let char = Math.floor(Math.random() * arr.length);
    pss += arr[char];
  }

  password.value = pss;
}

passwordGenrater(lengthOfPassword, isCharcterAllowd, isNumberAllowd);
