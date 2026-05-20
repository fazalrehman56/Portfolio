  // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    setTimeout(() => {
      ring.style.left = e.clientX + 'px';
      ring.style.top = e.clientY + 'px';
    }, 60);
  });

  // Scroll fade-in animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeUp .6s ease forwards';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project-card, .skill-item, .stat-box').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
    el.addEventListener('animationstart', () => el.style.opacity = '1');
  });