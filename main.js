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
document.addEventListener("DOMContentLoaded", () => {
  const scrollingTextElement = document.getElementById("scrolling-text");
  const text = `
    Dear Jophy,

    Happy Valentines Day, it's been awhile my Jophy,
    We've come a long way, but it feels like yesterday.
    
    From daisies white to roses red,
    Each one unique, a work of art.
    Your fragrance sweet, a gentle breeze,
    Forever etched within my heart.

    Through rain or shine, you stand tall,
    A symbol of life's persistence.
    In nature's grand tapestry, you shine,
    A testament to existence.

    Bloom on, dear flowers, far and wide,
    And paint the world with your hues.
    For in your presence, we find solace,
    And the beauty of life renews.
  `;

  scrollingTextElement.innerText = text;

  // Function to restart the animation
  function restartAnimation() {
    scrollingTextElement.style.animation = "none";
    scrollingTextElement.offsetHeight; // Trigger reflow
    scrollingTextElement.style.animation = null;
  }

  // Restart animation when it ends
  scrollingTextElement.addEventListener("animationiteration", restartAnimation);

  // Adjust animation duration for **faster** scrolling
  const textLength = text.length;
  const animationDuration = Math.max(15, textLength * 0.05); // Faster than before

  scrollingTextElement.style.animationDuration = `${animationDuration}s`;
});
