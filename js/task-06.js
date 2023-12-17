"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputValue = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const newBoxes = document.getElementById("boxes");

function createBoxes(amount) {
  newBoxes.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = 30 + i * 10 + "px";
    box.style.height = 30 + i * 10 + "px";
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add("boxes-item");
    newBoxes.appendChild(box);
  }
}

function destroyBoxes() {
  newBoxes.innerHTML = "";
  inputValue.value = "";
}

createButton.addEventListener("click", () => {
  const amount = inputValue.value;
  inputValue.value = "";

  amount >= 1 && amount <= 100
    ? createBoxes(amount)
    : alert("Please enter a number between 1 and 100.");
});

destroyButton.addEventListener("click", destroyBoxes);
