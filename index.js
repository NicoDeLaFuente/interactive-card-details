const nameCard = document.querySelector("#name");
const nameError = document.querySelector("#error__name")
const nameEditCard = document.querySelector("#card__name");

const numberCard = document.querySelector("#number")
const numberError = document.querySelector("#error__number")
const numberEditCard = document.querySelector("#card__number");

const monthDateCard =document.querySelector("#month__date");
const yearDateCard = document.querySelector("#year__date");
const dateError = document.querySelector("#error__date")
const monthEditCard = document.querySelector("#card__month__date")
const yearEditcard = document.querySelector("#card__year__date")

const cvc = document.querySelector("#cvc")
const cvcError = document.querySelector("#error__cvc")
const cvcEditCard = document.querySelector("#card__cvc")

const form = document.querySelector("#form")
const inputs = document.querySelectorAll("#form input")

const regex = {
  name: /^[a-zA-Z\s]{6,30}$/,
  number: /^(?:\d[ -]*?){13,16}/gm,
  month: /^(0?[1-9]|1[0-2])$/, 
  year: /^([2-3])\d$/,
  cvc: /^\d\d\d$/
}

const fields = {
  name: false,
  number: false, 
  month: false, 
  year: false, 
  cvc: false
}

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "name":
      validarInput(regex.name, e.target.value, nameCard, nameError, e.target.name, nameEditCard);
    break;
    case "number":
      validarInput(regex.number, e.target.value, numberCard, numberError, e.target.name, numberEditCard);
    break;
    case "month":
      validarInput(regex.month, e.target.value, monthDateCard, dateError, e.target.name, monthEditCard)
    break;
    case "year":
      validarInput(regex.year, e.target.value, yearDateCard, dateError, e.target.name, yearEditcard)
    break;
    case "cvc":
      validarInput(regex.cvc, e.target.value, cvc, cvcError, e.target.name, cvcEditCard) 
    break;
  }

}

const validarInput = (regex, event, tag, error, name, cardEdit) => {
  if (regex.test(event)) {
    error.textContent = "";
    tag.classList.remove("error")
    tag.classList.add("correct")
    cardEdit.textContent = event
    fields[name] = true;
  } else {
    error.textContent =  `Please enter your credit card ${name}`;
    tag.classList.add("error");
    tag.classList.remove("correct")
    fields[name] = false;
  }
}


inputs.forEach(input => {
  input.addEventListener("keyup", validarFormulario)
  input.addEventListener("blur", validarFormulario)
})





form.addEventListener("submit", (e) => {
    e.preventDefault();

  if (fields.name && fields.number && fields.month && fields.year && fields.cvc) {
    form.reset();
    submitSuccess();
    inputs.forEach(input => {
      input.classList.remove("correct")
    })
  } else {
    submitFail()
  }

})

const submitSuccess = () => {
  const message = document.querySelector("#message");
  message.textContent = `El formulario se envío correctamente`;
  message.classList.add("message__success");
  message.classList.remove("message__fail");
  setTimeout(() => {
    message.textContent = ""
    nameEditCard.textContent = "JANE APPLESEED"
    numberEditCard.textContent = "0000 0000 0000 0000"
    monthEditCard.textContent = "00"
    yearEditcard.textContent = "00"
    cvcEditCard.textContent = "000"
  }, 5000)
}

const submitFail = () => {
  const message = document.querySelector("#message");
  message.textContent = `Por favor rellene todos los campos correctamente.`
  message.classList.add("message__fail")
  message.classList.remove("message__success")
}