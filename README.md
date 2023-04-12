# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page


### Links

- Live Site URL: [Add live site URL here](https://nicodelafuente.github.io/interactive-card-details/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vainilla JavaScript

### What I learned

This was my first ever proyect with form validation. I have learnt a lot in the process. I found a little difficult how to handle the inputs validation. However, I can manage to acchive the goal and make a functional form. The regex help me so much in the process. 

```js
const regex = {
  name: /^[a-zA-Z\s]{6,30}$/,
  number: /^(?:\d[ -]*?){13,16}/gm,
  month: /^(0?[1-9]|1[0-2])$/, 
  year: /^([2-3])\d$/,
  cvc: /^\d\d\d$/
}
```

### Continued development

I want to master form validation as I consider very important in web development. I look forward to make many more projects so I can improve in this topic. This project was also great to continue practising DOM manipulation. 
Also, for future projects I will use React due to the fact I want to improve my skills with this JavaScript library. 


### Useful resources

- [Regexr](https://regexr.com/) - This helped me for searching the regex I need for each validation. 

## Author

- GitHub - [Nicolas De La Fuente](https://github.com/NicoDeLaFuente)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/NicoDeLaFuente)
