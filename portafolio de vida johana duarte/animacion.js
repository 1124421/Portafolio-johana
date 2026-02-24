const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('revealed'); } });
  }, {threshold: 0.12});
  reveals.forEach(el => io.observe(el));

  const fills = document.querySelectorAll('.skill-fill');
  const sio = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.style.width = e.target.dataset.w + '%'; } });
  }, {threshold: 0.5});
  fills.forEach(el => sio.observe(el));