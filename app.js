(function(){
var C=window.YAPA||{};
document.querySelectorAll("[data-apk]").forEach(function(a){var c=C[a.getAttribute("data-apk")];
  if(c&&c.listo){a.href=c.archivo;a.setAttribute("download","");a.removeAttribute("aria-disabled");a.onclick=null;}});
document.querySelectorAll("[data-nota]").forEach(function(n){var k=n.getAttribute("data-nota");
  var ok=k==="todos"?Object.keys(C).every(function(x){return C[x].listo;}):(C[k]&&C[k].listo);if(ok)n.hidden=true;});
})();
