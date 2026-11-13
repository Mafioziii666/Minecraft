document.addEventListener('DOMContentLoaded', function () {
  var interactivePanels = document.querySelectorAll('.product-row, .reward-card, .news-card');
  var mouseX = 0;
  var mouseY = 0;
  var isTicking = false;
  
  function updateEffects() {
    for (var i = 0; i < interactivePanels.length; i++) {
      var panel = interactivePanels[i];
      
      var rect = panel.getBoundingClientRect();
      
      if (rect.bottom < 0 || rect.top > window.innerHeight) continue;

      var x = mouseX - rect.left;
      var y = mouseY - rect.top;
      
      panel.style.backgroundPosition = x + 'px ' + y + 'px';
    }
    isTicking = false;
  }

  document.addEventListener('mousemove', function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;

    if (!isTicking) {
      window.requestAnimationFrame(updateEffects);
      isTicking = true;
    }
  });
});
