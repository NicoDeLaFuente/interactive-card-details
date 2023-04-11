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

// principal function
function cardDetails (element, conditional) {
  element.addEventListener("blur", (e) => {
    const tag = e.target;
    const value = e.currentTarget.value

    conditional(value, tag);
  })
  

}


// conditional name
const nameCardConditional = (value, tag) => {
  const error = nameError
  if (value.trim().length === 0) {
    tag.classList.remove("correct")
    tag.classList.add("error")
    error.textContent = "Please enter your credit card name";
  } else if (value.trim().length < 3) {
    tag.classList.remove("correct")
    tag.classList.add("error")
    error.textContent = "Your name should have at least three letters"
  } else if (value.trim().length > 20) {
    tag.classList.remove("correct")
    tag.classList.add("error")
    error.textContent = "Your name should not have more than 20 letters"
  } else {
    error.textContent = "";
    tag.classList.remove("error")
    tag.classList.add("correct")
    nameEditCard.textContent = value;
  }

  
}

// conditional number
const numberCardConditional = (value, tag) => {
  const error = numberError;
  if (value < 1000000000000000 || value > 9999999999999999) {
    tag.classList.remove("correct")
    tag.classList.add("error")
    error.textContent = "Enter a valid number. Must have 16 digits"
  } else {
    tag.classList.add("correct")
    tag.classList.remove("error")
    error.textContent = ""
    numberEditCard.textContent = value
  }
}

// conditional month date
const monthDateCardConditional = (value, tag) => {
  const error = dateError;
  if(value <= 0 || value > 12) {
    tag.classList.remove("correct")
    tag.classList.add("error")
    error.textContent = "Enter a valid date"
  } else {
    tag.classList.add("correct")
    tag.classList.remove("error")
    error.textContent = ""
    monthEditCard.textContent = value
  }
}

// conditional year date
const yearDateCardConditional = (value, tag) => {
  const error = dateError
  if(value < 23 || value > 50) {
    tag.classList.remove("correct")
    tag.classList.add("error")
    error.textContent = "Enter a valid date"
  } else {
    tag.classList.add("correct")
    tag.classList.remove("error")
    error.textContent = ""
    yearEditcard.textContent= value;
  }
}

//conditional cvc
const cvcConditional = (value, tag) => {
  const error = cvcError;
  if (value <100 || value > 999) {
    tag.classList.remove("correct");
    tag.classList.add("error");
    error.textContent = "Enter a valid CVC"
  } else {
    tag.classList.add("correct");
    tag.classList.remove("error");
    error.textContent = ""
    cvcEditCard.textContent = value;
  }

}

cardDetails(nameCard, nameCardConditional)
cardDetails(numberCard, numberCardConditional)
cardDetails(monthDateCard, monthDateCardConditional)
cardDetails(yearDateCard, yearDateCardConditional)
cardDetails(cvc, cvcConditional)