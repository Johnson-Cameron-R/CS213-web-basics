const sidebar = document.querySelector("#sidebar");
const buttons = document.querySelectorAll("#toggle, #closer");

buttons.forEach(button =>
  button.addEventListener("click", _ => {
    sidebar.classList.toggle("collapsed");
  })
);
