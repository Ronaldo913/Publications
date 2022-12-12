const openModalButton = document.querySelectorAll(".open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = (id) => {
  const form = document.getElementById("form");
  form.action = id + '/update';
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

openModalButton.forEach((el) => {
  el.addEventListener("click", () => toggleModal(el.id));
});
[closeModalButton, fade].forEach((el) => {

  el.addEventListener("click", () => toggleModal());
});