const body = document.querySelector("body");
body.addEventListener("click", skipAnime());
body.addEventListener("keydown", skipAnime());
function skipAnime() {
  const animatedElements = document.querySelectorAll(
    `[class="animate__animated"]`
  );
  // select element with the class animated
  animatedElements.forEach((animatedElements) =>
    animatedElements.classList.add("skip")
  );
}
//add .skip to it to set aniamtion-delay to 0s
