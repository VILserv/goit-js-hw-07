"use strict";
const nameInput = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    const inputValue = event.target.value.trim()
    userName.textContent = inputValue ? inputValue : "Anonymous"
})


