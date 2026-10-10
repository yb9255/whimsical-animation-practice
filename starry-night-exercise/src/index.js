import { random, range } from 'lodash';
import './reset.css';
import './styles.css';

const btn = document.querySelector('.particleButton');
const FADE_IN_DURATION = 1000;

btn.addEventListener('click', () => {
  // TODO: Generate stars on click!
  // Here’s the emoji to use: ⭐

  range(10).forEach(() => {
    const star = document.createElement('div');
    star.classList.add('star');
    star.innerText = '⭐';

    star.style.top = random(0, 100) + '%';
    star.style.left = random(0, 100) + '%';
    star.style.animationDuration = FADE_IN_DURATION + 'ms';

    document.body.appendChild(star);
  });
});

/*
  DOM manipulation cheatsheet:
  
  - Select an element:
    `document.querySelector('.someCssSelector');`
  - Create new elements:
    `document.createElement('tagName');`
  - Add a CSS class:
    `element.classList.add('className');`
  - Add the element to the DOM:
    `parentNode.appendChild(childNode);`
  - Add text to a node:
    `element.innerText = "Stuff";`
*/
