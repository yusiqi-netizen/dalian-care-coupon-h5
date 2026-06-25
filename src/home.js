(function () {
  Vue.config.productionTip = false;

  new Vue({
    el: "#app",
    data: function () {
      return {
        links: [
          {
            label: "用户端 H5",
            href: "./user.html",
          },
          {
            label: "机构端 H5",
            href: "./org.html",
          },
        ],
      };
    },
  });
})();
