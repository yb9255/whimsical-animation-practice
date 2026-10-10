import { random, range } from 'lodash';
import './reset.css';
import './styles.css';

const btn = document.querySelector('.particleButton');
const starLayer = document.querySelector('.starLayer');

btn.addEventListener('click', () => {
  range(10).forEach(() => {
    const particle = document.createElement('span');
    particle.innerHTML = '⭐';
    particle.classList.add('star');
    particle.style.top = random(0, 100) + '%';
    particle.style.left = random(0, 100) + '%';

    starLayer.appendChild(particle);
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
