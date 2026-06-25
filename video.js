(function () {
  var cards = document.querySelectorAll(".video-card");

  cards.forEach(function (card) {
    var video = card.querySelector("video");
    if (!video) return;

    video.addEventListener("play", function () {
      card.classList.add("is-playing");
    });

    video.addEventListener("pause", function () {
      card.classList.remove("is-playing");
    });

    video.addEventListener("ended", function () {
      card.classList.remove("is-playing");
    });
  });
})();
