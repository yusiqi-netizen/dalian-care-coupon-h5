Vue.component("h5-page", {
  props: {
    page: {
      type: Object,
      required: true,
    },
    assets: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isOrg: function () {
      return this.page.type === "org";
    },
    pageClass: function () {
      return this.isOrg ? "phone-page org-page" : "phone-page user-page";
    },
    contentClass: function () {
      return this.isOrg ? "content org-content" : "content user-content";
    },
  },
  template: [
    '<main :class="pageClass">',
    '  <div class="top-strip" aria-hidden="true"></div>',
    '  <section class="hero">',
    '    <h1 v-if="isOrg" class="hero-title org-title" v-html="page.hero.main"></h1>',
    '    <template v-else>',
    '      <h1 class="hero-title user-title-main" v-html="page.hero.main"></h1>',
    '      <p class="hero-title user-title-sub" v-html="page.hero.sub"></p>',
    "    </template>",
    "  </section>",
    '  <section :class="contentClass">',
    '    <p class="guide"><strong>领取补贴详细步骤</strong><span> 详见视频</span></p>',
    '    <div v-if="isOrg" class="video-list">',
    '      <section v-for="video in page.videos" :key="video.title" class="video-section">',
    '        <h2 class="video-title">{{ video.title }}</h2>',
    '        <video-card :video-src="assets.videoSrc" :poster-src="assets.posterSrc"></video-card>',
    "      </section>",
    "    </div>",
    '    <video-card v-else :video-src="assets.videoSrc" :poster-src="assets.posterSrc"></video-card>',
    '    <section class="qr-section">',
    '      <h2 class="qr-title">{{ page.qr.title }}</h2>',
    '      <div class="qr-arrows" aria-hidden="true">↓↓↓</div>',
    '      <img class="qr-card" :src="assets.qrSrc" :alt="page.qr.alt" />',
    "    </section>",
    "  </section>",
    '  <div class="bottom-bg" aria-hidden="true"></div>',
    "</main>",
  ].join(""),
});
