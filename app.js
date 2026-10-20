(function(){
var C=window.YAPA||{};
document.querySelectorAll("[data-apk]").forEach(function(a){var c=C[a.getAttribute("data-apk")];
  if(c&&c.listo){a.href=c.archivo;a.setAttribute("download","");a.removeAttribute("aria-disabled");a.onclick=null;}});
document.querySelectorAll("[data-nota]").forEach(function(n){var c=C[n.getAttribute("data-nota")];if(c&&c.listo)n.hidden=true;});
})();
