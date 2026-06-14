import random from 'lodash.random';
import range from 'lodash.range';

const btn = document.querySelector('.particleButton');
const FADE_DURATION = 1000;
const MAGNITUDE = 48;

btn.addEventListener('click', () => {
  btn.classList.toggle('liked');

  const isLiked = btn.classList.contains('liked');

  if (!isLiked) {
    return;
  }

  const particles = [];

  // top - left 포지셔닝 기반 좌표 업데이트
  range(5).forEach(() => {
    const particle = document.createElement('span');
    particle.classList.add('particle');

    particle.style.top = random(0, 100) + '%';
    particle.style.left = random(0, 100) + '%';
    particle.style.setProperty('--fade-duration', FADE_DURATION + 'ms');

    btn.appendChild(particle);
    particles.push(particle);
  });

  // Magnitude 기반, 가운데 -> 사방으로 펼쳐지는 좌표 업데이트
  range(5).forEach(() => {
    const particle = document.createElement('span');
    particle.classList.add('particle2');

    const x = random(-MAGNITUDE, MAGNITUDE);
    const y = random(-MAGNITUDE, MAGNITUDE);
    particle.style.transform = `translate(${x}px, ${y}px)`;

    particle.style.setProperty('--fade-duration', FADE_DURATION + 'ms');

    btn.appendChild(particle);
    particles.push(particle);
  });

  window.setTimeout(() => {
    particles.forEach((particle) => {
      particle.remove();
    });
  }, FADE_DURATION + 200);
});
