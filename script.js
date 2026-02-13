const gradients = [
  ['#667eea', '#764ba2'],
  ['#f093fb', '#f5576c'],
  ['#4facfe', '#00f2fe'],
  ['#43e97b', '#38f9d7'],
  ['#fa709a', '#fee140'],
  ['#a18cd1', '#fbc2eb'],
  ['#fccb90', '#d57eeb'],
  ['#fd746c', '#ff9068'],
  ['#30cfd0', '#330867'],
  ['#a8edea', '#fed6e3'],
];

let currentIndex = 0;

const btn = document.getElementById('colorBtn');
const title = document.getElementById('title');

btn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % gradients.length;
  const [c1, c2] = gradients[currentIndex];

  document.body.style.background = `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`;

  title.classList.add('pop');
  title.addEventListener('transitionend', () => title.classList.remove('pop'), { once: true });
});
