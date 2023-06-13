import contarPalabras from "./password";

const texto = document.querySelector("#texto");
const contarForm = document.querySelector("#contar-form");
const div = document.querySelector("#resultado-div");

contarForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const textfirst = first.value.trim();
  // const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + contarForm() + "</p>";
});
