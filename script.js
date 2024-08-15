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
  $("section").addClass("show");
}
