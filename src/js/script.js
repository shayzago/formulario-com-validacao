const inputs = document.querySelectorAll(".form__input");
const botao = document.querySelector(".form__botao");

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value != "") {
      input.classList.add("correto");
      input.classList.remove("erro");
      input.nextElementSibling.classList.remove("erro");
    } else {
        input.classList.remove("correto");
    }
  });
});

botao.addEventListener("click", (e) => {
  inputs.forEach((input) => {
    if (input.value === "") {
      e.preventDefault();
      input.classList.add("erro");
      input.nextElementSibling.classList.add("erro");
    } else {
      input.classList.remove("erro");
      input.nextElementSibling.classList.remove("erro");
    }
  });
});