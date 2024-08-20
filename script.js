import { starAnimation, killAll } from "./stars.js";

const fadeInSections = () => {
  $("section").addClass("show");
}

const setupPopup = () => {
  const $newsletterButton = $("#newsletter-button");
  const $popup = $(".popup");
  const $overlay = $(".overlay");
  const $closePopup = $("#closePopup");

  $newsletterButton.on("click", () => {
    $popup.fadeIn(300);
    $overlay.fadeIn(300);
  });

  $closePopup.on("click", () => {
    $popup.fadeOut(300);
    $overlay.fadeOut(300);
  });

  $overlay.on("click", () => {
    $popup.fadeOut(300);
    $overlay.fadeOut(300);
  });
}

const main = () => {
  starAnimation();

  setTimeout(() => {
    $("body").css("overflow", "visible");
    fadeInSections();
  }, 1000);

  setupPopup();
}


$(document).ready(main);
