document.addEventListener("DOMContentLoaded", function () {
    const fadeButton = document.getElementById("fadeButton");
  
    fadeButton.addEventListener("click", function () {
      document.body.classList.add("hidden");
  
      // fade-out transition 1000(ms) = 1s
      setTimeout(function () {
        window.location.href = "index.html";
      }, 1000);
    });
  });
  