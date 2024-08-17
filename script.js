import { starAnimation, killAll } from "./stars.js";

const fadeInSections = () => {
  $("section").addClass("show");
}

const main = () => {
  starAnimation();

  setTimeout(() => {
    $("body").css("overflow", "visible");
    fadeInSections();
  }, 1000);
}


$(document).ready(main);

