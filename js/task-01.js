"use strict";
const list = document.querySelector("categories");
const items = document.querySelectorAll(".item");

console.log("Number of categories: ", items.length);

items.forEach((item) => {
  console.log(`Categories:  ${item.firstElementChild.textContent}`);
  console.log(`Elements:  ${item.querySelectorAll("ul li").length}`);
});
