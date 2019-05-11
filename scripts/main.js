const hamburger = document.querySelector(".fa-bars");
const dropdown = document.querySelector(".dropdown");

function toggle() {
  dropdown.classList.add("open");
}

hamburger.addEventListener("click", toggle);
