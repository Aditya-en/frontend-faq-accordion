# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./Screenshot.jpg)
![](./Screenshot-mobile.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I learnt how to use javascript to add and remove className to elements using `element.classList` and also used some animations


```js
answer.classList.add('show');
svgIcon.style.backgroundImage = 'url(./assets/images/icon-minus.svg)';
```
```css
.answer{
    max-height: 0px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    transition: max-height .5s ease, padding .5s ease;
    color: var(--color-grayish-purple);
}
.show{
    max-height: 1000px;
    padding-top: 1.5em;
}
```



## Author

- Frontend Mentor - [@Aditya-en](https://www.frontendmentor.io/profile/Aditya-en)
- Twitter - [@adit__twts](https://www.twitter.com/adit__twts)

