// Home page
let clicksOnPresent = 0;

document.getElementById("cadou").addEventListener("click", function () {
  this.classList.add("animate");

  // Optional: Remove the animation class after the animation ends to allow re-animating.
  this.addEventListener("animationend", () => {
    this.classList.remove("animate");
  });

  clicksOnPresent++;
  if (clicksOnPresent >= 15)
    window.location.href = "./challenge1/challenge1.html";
});
