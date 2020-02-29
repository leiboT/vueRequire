define(["vue", "ELIndex", "i18nHandler", "componentsHandler"], function(
  Vue,
  ELIndex,
  i18nHander,
  componentsHandler
) {
  "use strict";
  return function(ops, callback) {
    var pageConfig = ops;
    // 初始化 Loading Notification MessageBox http
    // 插件方式
    Vue.use(ELIndex.Loading);
    // 实例方法
    Vue.prototype.$notification = ELIndex.Notification;
    Vue.prototype.$confirm = ELIndex.MessageBox.confirm;
    i18nHander(ops, function(i18n) {
      componentsHandler(ops, function(components) {
        // 创建Vue根实例
        new Vue({
          el: "#app",
          i18n: i18n,
          components: components,
          created: function() {
            callback(this);
          },
          watch: pageConfig.watch,
          computed: pageConfig.computed,
          data: pageConfig.data,
          methods: pageConfig.methods
        });
      });
    });
  };
});
