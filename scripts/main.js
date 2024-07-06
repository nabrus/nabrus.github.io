const hamburger = document.querySelector('.fa-bars');
const dropdown = document.querySelector('.dropdown');
const dropdownCloseBtn = document.querySelector('.close-btn');

// Open dropdown menu
function openMenu() {
  dropdown.classList.add('open');
}

// Close dropdown menu
function closeMenu() {
  dropdown.classList.remove('open');
}

hamburger.addEventListener('click', openMenu);
dropdownCloseBtn.addEventListener('click', closeMenu);
