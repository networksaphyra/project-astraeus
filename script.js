import { starAnimation, killAll } from "./stars.js";

$(document).ready(function() {
  starAnimation();

  setTimeout(() => {
    killAll();
  }, 3000);
});
