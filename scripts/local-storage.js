const form = document.querySelector("form");
const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.getElementById("item");

let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));

// List item maker
const addItemToList = text => {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
};

// display anything already in local storage
data.forEach(item => {
  addItemToList(item);
});

// Catch the form submission and do our own thing
form.addEventListener("submit", function(e) {
  e.preventDefault();

  // update localstorage
  itemsArray.push(input.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));

  // show the user
  addItemToList(input.value);
  input.value = "";
});

// Clear localStorage and ul
button.addEventListener("click", function() {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});
