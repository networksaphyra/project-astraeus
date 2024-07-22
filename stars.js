let animationFrameId;

export function starAnimation() {
  const canvas = document.getElementById("starCanvas");
  const ctx = canvas.getContext("2d");

  const starCount = 100;
  const stars = [];
  const widthRange = [50, window.innerWidth - 50];
  const heightRange = [50, window.innerHeight - 50];

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createStars() {
    for (let star = 1; star <= starCount; ++star) {
      stars.push({
        x: Math.random() * (widthRange[1] - widthRange[0]) + widthRange[0],
        y: Math.random() * (heightRange[1] - heightRange[0]) + heightRange[0],
        radius: Math.random() * 2 + 1,
        speed: 5
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FAFAFA";

    stars.forEach(star => {
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
