import { starAnimation, killAll } from "./stars.js";

$(document).ready(main);

function main() {

  starAnimation();
  setTimeout(() => {
    $("#hero").addClass("show"); 
  }, 1000); 

}