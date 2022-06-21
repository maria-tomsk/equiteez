const burger = document.querySelector("#burger");
const popup = document.querySelector("#popup");
const body = document.body;
const menu = document.querySelector("#menu").cloneNode(1);


burger.addEventListener("click", openMenu);

function openMenu (e) {
    e.preventDefault();
  
  popup.classList.toggle("open");
  burger.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
    
}

const links = Array.from(menu.children);
 
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});
 
function closeOnClick() {
  popup.classList.remove("open");
  burger.classList.remove("active");
  body.classList.remove("noscroll");
}

const button = document.querySelector(".info__button");
const modals = document.querySelector(".modals");
const overlay = document.querySelector(".modal-overlay");

button.addEventListener("click", openModal);

function openModal (e) {
modals.style.display='block';
}

overlay.addEventListener("click", closeModal);

function closeModal() {
    modals.style.display="none";
}



