// DOM => Document Object Model
// Single element selectors
const element1 = console.log(document.getElementById("my-form"));
const element2 = console.log(document.querySelector("h1"));

const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(`Im item `, item));
// console.log(document.getElementsByClassName("item"));

// manipulating the items through js
const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "1";
// ul.children[1].innerText = "2";
// ul.lastElementChild.innerHTML = "<h2>3</h2>";

const btn = document.querySelector(".btn");
btn.style.background = "red";
btn.addEventListener("click", function (e) {
  e.preventDefault();
  btn.style.background = btn.style.background === "grey" ? "red" : "grey";
});
