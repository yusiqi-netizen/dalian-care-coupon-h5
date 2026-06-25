(function () {
  var pageName = document.body.getAttribute("data-page");
  var config = window.H5_PAGE_CONFIG;
  var page = config && config[pageName];

  if (!page) {
    return;
  }

  document.title = page.title;
  Vue.config.productionTip = false;

  new Vue({
    el: "#app",
    data: function () {
      return {
        page: page,
        assets: config.assets,
      };
    },
    template: '<h5-page :page="page" :assets="assets"></h5-page>',
  });
})();
