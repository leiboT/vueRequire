"use strict";
requirejs.config({
  baseURL: "/js",
  // 组件模块路径配置
  paths: {
    jquery: "./lib/jquery/jquery",
    vue: "./lib/vue/vue",
    css: "./lib/require-css/css",
    BButton: "./lib/buefy/dist/components/button/index",
    BInput: "./lib/buefy/dist/components/input/index",
    BIcon: "./lib/buefy/dist/components/icon/index",
    BSwitch: "./lib/buefy/dist/components/switch/index",
    BUpload: "./lib/buefy/dist/components/upload/index",
    "sf-button": "./component/button/index",
    "sf-input": "./component/input/index",
    "sf-icon": "./component/icon/index",
    "sf-title-content": "./component/titleContent/index",
    "sf-label-value": "./component/labelValue/index",
    "sf-switch": "./component/switch/index",
    "sf-upload": "./component/upload/index",
    "sf-theme": "./component/theme/index"
  },
  shim: {
    BButton: {
      deps: ["BIcon"]
    }
  },
  map: {}
});

(function() {
  function SF() {
    this.init = function(ops) {
      require(["vue"], function(Vue) {
        var components = ops.components;
        // 初始组件
        require(components, function() {
          var componentList = arguments;
          var plugin = ops.plugin;
          // 初始插件
          require(plugin, function() {
            Vue.prototype.$sf = {};
            for (var i = 0; i < arguments.length; i++) {
              Vue.prototype.$sf[plugin[i]] = arguments[i];
            }
            var _components = {};
            for (var i = 0; i < componentList.length; i++) {
              var record = componentList[i];
              _components[record.name] = record;
            }
            // 创建根实例
            new Vue({
              el: "#app",
              components: _components,
              created: ops.created,
              data: ops.data,
              methods: ops.methods
            });
          });
        });
      });
    };
  }

  window.sf = new SF();
})();
