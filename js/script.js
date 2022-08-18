//Question 1

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("I'm a button");
});

//Question 2

const button = document.querySelector("form button");
let countOutput = document.querySelector("b.count");
const input = document.querySelector("input");

function countCharacters() {
  const characterCount = input.value.trim().length;
  countOutput.innerHTML = characterCount;
}

button.addEventListener("click", countCharacters);
