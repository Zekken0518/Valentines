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
    You remember this song? 
    This song is probably a song you won't forget,
    Can I have this dance?

    Still vividly remember the warmth of your hand,
    At the center of the ballroom we stand.
    The day I stretched my arm to ask your hand for a dance,
    Was the day that our love took its entrance.

    Roses are red, violets are blue,
    Would it be cringe of me to say that I Love You.
    Philosophers tell meaningful stories they say,
    But encyclopedias would be jealous of the words your eyes convey.

    Your pure and innocent smile, 
    Your laughter that echoes for miles.
    The way I look at you,
    Feels like i'm looking at a view.

    Even through misunderstandings,
    We've been through a lot of things.
    We've been through storms and rains,
    But through God our love remains.

    I'm not good with words, but I hope you understand,
    That my love for you is more than just a stand.
    I love you more than words can say,
    And I'll Love you more each passing day.

    We've gone far, but this is just the beggining,
    We will be going through a lot more, but we will be winning.
    You stayed with me, even when I'm at my lowest,
    Then you deserve me at my best.

    We are going to argue more in the future,
    But that doesn't mean our Love will rupture.
    Argument is just a process of building a strong relationship,
    It is not by any means a sign of a sinking ship.

    I'm far away from you, but you keep me in your heart,
    You keep me in your prayers, even when we're apart.
    How could I not Love you, when you Love me this much,
    I am grateful to God, for giving me you as such.

    I'm sorry for the times I made you cry,
    Because time is not on my side.
    I'm sorry for the times I made you sad,
    But I'm trying my best to be the best you've ever had.

    I will repay the times when I were'nt there when you needed me most,
    I will be there for you, even if I become a shade of a ghost.
    Even if the world turns its back on you,
    I will be there, standing beside you.

    Let's continue on our studies,
    Let's continue on our journey.
    Let's continue to grow together,
    Let's continue to be better.

    When the comes and have what we've been dreaming,
    It will be the time when we'll be smiling.
    We'll be looking back at the times we've been through,
    And we'll be thankful that we chose the love that we knew.

    So can I have this dance?
    Can I hold your hand?
    Can I be the one you'll always stand?

    I love you, Jophy,
    Happy Valentines Day.
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
