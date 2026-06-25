Vue.component("video-card", {
  props: {
    videoSrc: {
      type: String,
      required: true,
    },
    posterSrc: {
      type: String,
      required: true,
    },
  },
  template: [
    '<div class="video-card">',
    "  <video",
    "    controls",
    "    playsinline",
    "    webkit-playsinline",
    "    x5-playsinline",
    '    x5-video-player-type="h5-page"',
    '    x5-video-player-fullscreen="true"',
    '    x5-video-orientation="landscape"',
    '    preload="metadata"',
    '    :poster="posterSrc"',
    '    :src="videoSrc"',
    "  ></video>",
    "</div>",
  ].join(""),
});
