let animationFrameId;

export function starAnimation() {
  const canvas = document.getElementById("starCanvas");
  const ctx = canvas.getContext("2d");
  const starCount = 150;
  const stars = [];
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createStars() {
    for (let i = 0; i < starCount; ++i) {
      const angle = Math.random() * 2 * Math.PI;
      const radius = Math.random() * Math.max(window.innerWidth, window.innerHeight) * 1.5;
      stars.push({
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
        radius: Math.random() * 2 + 0.5,
        speed: Math.random() * 3 + 0.5,
        opacity: 1
      });
    }
  }

  function resetStar(star) {
    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * Math.max(window.innerWidth, window.innerHeight) * 1.5;
    star.x = centerX + radius * Math.cos(angle);
    star.y = centerY + radius * Math.sin(angle);
    star.radius = Math.random() * 2 + 0.5;
    star.speed = Math.random() * 3 + 0.5;
    star.opacity = 1;
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach((star) => {
      const dx = centerX - star.x;
      const dy = centerY - star.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 5) {
        resetStar(star);
      } else {
        star.x += (dx / distance) * star.speed;
        star.y += (dy / distance) * star.speed;
        star.speed+=0.009
      }

      const maxDistance = Math.max(window.innerWidth, window.innerHeight) / 2 + 50;
      star.opacity = Math.min(distance / maxDistance, 1);

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(250, 250, 250, ${star.opacity})`;
      ctx.fill();
    });

    animationFrameId = window.requestAnimationFrame(animate);
  }

  setupCanvas();
  createStars();
  animate();
}

export function killAll() {
  const canvas = document.getElementById("starCanvas");
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
  if (canvas) {
    canvas.parentNode.removeChild(canvas);
  }
}
