let animationFrameId;

export function starAnimation() {
  const canvas = document.getElementById("starCanvas");
  const ctx = canvas.getContext("2d");

  const starCount = 100;
  const stars = [];
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createStars() {
    for (let i=0; i<starCount; ++i) {
      const angle = Math.random() * 2 * Math.PI;
      const radius = Math.random() * Math.max(window.innerWidth, window.innerHeight) * 1.5;

      stars.push({
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
        radius: 2,
        speed: 5
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FAFAFA";

    stars.forEach((star, index) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();

      const dx = centerX - star.x;
      const dy = centerY - star.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance !== 0) {
        star.x += (dx / distance) * star.speed;
        star.y += (dy / distance) * star.speed;
      }
    });
    
    animationFrameId = requestAnimationFrame(animate);
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
