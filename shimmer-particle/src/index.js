import './reset.css';
import './styles.css';

const btn = document.querySelector('.buyButton');
const TIMEOUT_MS = 1000;

function generateShimmer() {
  const shimmer = document.createElement('span');
  shimmer.classList.add('shimmer');
  shimmer.style.animationDuration = TIMEOUT_MS + 'ms';

  btn.appendChild(shimmer);

  setTimeout(() => {
    shimmer.remove();
  }, TIMEOUT_MS + 20);
}

btn.addEventListener('mouseenter', generateShimmer);
btn.addEventListener('focus', generateShimmer);

/*
  DOM manipulation cheatsheet:
  
  - Set an inline style:
    `element.style.backgroundColor = "white";`
  - Destroy an element:
    `element.remove();`
*/
