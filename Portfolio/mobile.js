const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const closeButton = document.querySelector(".mobile-menu-close");
const mobileLinks = document.querySelectorAll(".mobile-nav-link");

function openMenu() {
  mobileMenu.classList.add("is-open");

  mobileMenu.setAttribute("aria-hidden", "false");
  menuButton.setAttribute("aria-expanded", "true");

  document.body.classList.add("mobile-menu-open");
}

function closeMenu() {
  mobileMenu.classList.remove("is-open");

  mobileMenu.setAttribute("aria-hidden", "true");
  menuButton.setAttribute("aria-expanded", "false");

  document.body.classList.remove("mobile-menu-open");
}

menuButton.addEventListener("click", openMenu);

closeButton.addEventListener("click", closeMenu);

mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

// Modal2

const headerMail = document.querySelector(".header-mail");
const mobileEmail = document.querySelector(".mobile-email");

const modalBackdrop = document.querySelector(".modal-backdrop");
const modalClose = document.querySelector(".modal-close");
const modalForm = document.querySelector(".modal-form");

function openModal(event) {
  event.preventDefault();

  modalBackdrop.classList.add("is-open");
  modalBackdrop.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");
}

function closeModal() {
  modalBackdrop.classList.remove("is-open");
  modalBackdrop.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");
}

if (headerMail) {
  headerMail.addEventListener("click", openModal);
}

if (mobileEmail) {
  mobileEmail.addEventListener("click", openModal);
}

modalClose.addEventListener("click", closeModal);

modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

modalForm.addEventListener("submit", (event) => {
  event.preventDefault();
});