// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Анимация кнопки
  const rsvpBtn = document.querySelector('.rsvp-btn');
  
  rsvpBtn.addEventListener('click', function() {
    gsap.to(rsvpBtn, {
      scale: 0.9,
      duration: 0.2,
      yoyo: true,
      repeat: 1
    });
    
    // Здесь можно добавить логику подтверждения
    alert('Ура! Ждём тебя 22 мая! 🎉');
  });
  
  // Анимация попадания попкорна
  gsap.to('.piece', {
    y: 160,
    rotation: 360,
    opacity: 0,
    duration: 5,
    stagger: 0.5,
    repeat: -1,
    ease: "none"
  });
  
  // Эффект мерцания как в кинотеатре
  setInterval(() => {
    gsap.to('.cinema-frame', {
      opacity: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });
  }, 3000);
  
  // Параллакс эффект
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    gsap.to('.cinema-frame', {
      rotationY: 10 * (x - 0.5),
      rotationX: -10 * (y - 0.5),
      duration: 1
    });
  });
});