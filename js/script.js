//Question 1

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("I'm a button");
});

//Question 2

const button = document.querySelector("button[type='button']");
let count = document.querySelector(".count");
const input = document.querySelector("input");

button.addEventListener("click", function () {
  console.log(event.target.value.length);

  input.onkeyup = function () {
    console.log(event.target.value.length);

    let length = event.target.value.length;

    count.innerHTML = length;
  };
});
