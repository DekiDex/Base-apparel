const emailInput = document.querySelector('input[name="email"]');
const form = document.querySelector('input[name="form"]');

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

emailInput.isValid = () => isValidEmail(emailInput.value);

const inputFields = [emailInput];

let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
  console.log("we are here");
  if (!shouldValidate) return;


  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    emailInput.placeholder = 'example@email/com';
    input.nextElementSibling.classList.add("hidden");


        if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hidden");
    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {
  }
});