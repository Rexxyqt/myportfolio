const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  setTimeout(() => {
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
  }, 100);
});

document.addEventListener('mousedown', () => {
  cursor.style.width = '15px';
  cursor.style.height = '15px';
  cursorFollower.style.width = '30px';
  cursorFollower.style.height = '30px';
});

document.addEventListener('mouseup', () => {
  cursor.style.width = '20px';
  cursor.style.height = '20px';
  cursorFollower.style.width = '40px';
  cursorFollower.style.height = '40px';
});

function animateTechPills() {
  ['languages-container', 'web-container', 'embedded-container', 'game-container', 'db-container'].forEach(id => {
    const container = document.getElementById(id);
    if (!container) return;
    const pills = container.querySelectorAll('.tech-pill');
    pills.forEach((pill, i) => {
      setTimeout(() => {
        pill.style.opacity = '1';
        pill.style.transform = 'translateY(0)';
      }, i * 100);
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.id === 'skills') {
      animateTechPills();
    }
  });
}, { threshold: 0.1 });

observer.observe(document.getElementById('skills'));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
