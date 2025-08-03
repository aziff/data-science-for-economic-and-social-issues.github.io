// scroll-access.js

document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll(".cell-output pre").forEach(function(el){
    el.setAttribute("tabindex","0");
  })
})