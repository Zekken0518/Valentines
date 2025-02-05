onload = () => {
  document.body.classList.remove("container");
};
document.addEventListener("DOMContentLoaded", function () {
  var music = document.getElementById("bg-music");

  // Try to play immediately
  music.play().catch(error => {
      console.log("Autoplay prevented. Waiting for user interaction.");

      // Wait for user to click anywhere on the page, then play
      document.body.addEventListener("click", function () {
          music.play();
      }, { once: true });
  });
});

