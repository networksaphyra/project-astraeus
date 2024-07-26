import { starAnimation, killAll } from "./stars.js";

$(document).ready(main);

function main() {

  starAnimation();
  setTimeout(() => {
    $("#hero").addClass("show"); 
    setTimeout(() => {
      $("body").css("overflow", "visible");
    }, 200)
  }, 1000); 


}