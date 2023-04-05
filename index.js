const nameCard = document.querySelector("#name");
const nameError = document.querySelector("#error__name")

const numberCard = document.querySelector("#number")
const numberError = document.querySelector("#error__number")

const monthDateCard =document.querySelector("#month__date");
const yearDateCard = document.querySelector("#year__date");
const dateError = document.querySelector("#error__date")

const cvc = document.querySelector("#cvc")
const cvcError = document.querySelector("#error__cvc")



nameCard.addEventListener("blur", (e) => {
  const nameTag = e.target
  const nameValue = e.currentTarget.value
  if (nameValue.trim().length === 0) {
    nameTag.classList.remove("correct")
    nameTag.classList.add("error")
    nameError.textContent = "Please enter your credit card name";
  } else if (nameValue.trim().length < 3) {
    nameTag.classList.remove("correct")
    nameTag.classList.add("error")
    nameError.textContent = "Your name should have at least three letters"
  } else if (nameValue.trim().length > 20) {
    nameTag.classList.remove("correct")
    nameTag.classList.add("error")
    nameError.textContent = "Your name should not have more than 20 letters"
  } else {
    nameError.textContent = "";
    nameTag.classList.remove("error")
    nameTag.classList.add("correct")
  }

})

numberCard.addEventListener("blur", (e) => {
  const numberTag = e.target
  const numberValue = e.currentTarget.value
  

  if (numberValue < 1000000000000000 || numberValue > 9999999999999999) {
    numberTag.classList.remove("correct")
    numberTag.classList.add("error")
    numberError.textContent = "Enter a valid number. Must have 16 digits"
  } else {
    numberTag.classList.add("correct")
    numberTag.classList.remove("error")
    numberError.textContent = ""
  }
})

monthDateCard.addEventListener("blur", (e) => {
  const monthTag = e.target;
  const month = e.currentTarget.value;

  if(month <= 0 || month > 12) {
    monthTag.classList.remove("correct")
    monthTag.classList.add("error")
    dateError.textContent = "Enter a valid date"
  } else {
    monthTag.classList.add("correct")
    monthTag.classList.remove("error")
    dateError.textContent = ""
  }
})

yearDateCard.addEventListener("blur", (e) => {
  const yearTag = e.target;
  const year = e.currentTarget.value;

  if(year <= 2023 || year > 2050) {
    yearTag.classList.remove("correct")
    yearTag.classList.add("error")
    dateError.textContent = "Enter a valid date"
  } else {
    yearTag.classList.add("correct")
    yearTag.classList.remove("error")
    dateError.textContent = ""
  }
})

cvc.addEventListener("blur", (e) => {
  const cvcTag = e.target;
  const cvcValue = e.currentTarget.value;

  if (cvcValue <100 || cvcValue > 999) {
    cvcTag.classList.remove("correct");
    cvcTag.classList.add("error");
    cvcError.textContent = "Enter a valid CVC"
  } else {
    cvcTag.classList.add("correct");
    cvcTag.classList.remove("error");
    cvcError.textContent = ""
  }
})