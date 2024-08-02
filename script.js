import { starAnimation, killAll } from "./stars.js";

$(document).ready(main);

function main() {
  starAnimation();

  setTimeout(() => {
    $("body").css("overflow", "visible");
    fadeInSections();
  }, 1000);
}

function fadeInSections() {
  $("#hero").addClass("show");
  $("#content").addClass("show");
  $("#press").addClass("show");
  $("#vision").addClass("show");
  $("#structure").addClass("show");
  $("#contact").addClass("show");
  $("#footer").addClass("show");
}

// for carousel 
document.addEventListener('DOMContentLoaded', function () {
  const articleList = document.querySelector('.article-list');
  const articles = document.querySelectorAll('.article-item');
  const dotsContainer = document.querySelector('.carousel-dots');
  let currentIndex = 0;
  const intervalTime = 15000; // 15 seconds

  function createDots() {
    articles.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
    updateDots();
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll('span');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    const offset = -currentIndex * 100;
    articleList.style.transform = `translateX(${offset}%)`;
    updateDots();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % articles.length;
    goToSlide(currentIndex);
  }

  createDots();
  setInterval(nextSlide, intervalTime);

  // Initial slide
  goToSlide(currentIndex);
});


// for auto snap to section (had to remove cus diabolical)
// if you have an idea for it lmk

// document.addEventListener('DOMContentLoaded', function () {
//   const sections = document.querySelectorAll('.section');

//   function snapToSection() {
//       const scrollPosition = window.scrollY;
//       let closestSection = sections[0];
//       let minDistance = Math.abs(scrollPosition - sections[0].offsetTop);

//       sections.forEach(section => {
//           const distance = Math.abs(scrollPosition - section.offsetTop);
//           if (distance < minDistance) {
//               minDistance = distance;
//               closestSection = section;
//           }
//       });

//       closestSection.scrollIntoView({ behavior: 'smooth' });
//   }

//   window.addEventListener('scroll', () => {
//       clearTimeout(window.snappingTimeout);
//       window.snappingTimeout = setTimeout(snapToSection, 100);
//   });
// });
