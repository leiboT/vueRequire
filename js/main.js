"use strict";
requirejs.config({
  baseURL: "/js",
  // 组件模块路径配置
  paths: {
    vue: "./lib/vue/vue",
    jquery: "./lib/jquery/jquery.min",
    lodash: "./lib/lodash/lodash.min",
    push: "./lib/push/push.min",
    sortablejs: "./lib/sortable/sortable.min",
    axios: "./lib/axios/axios.min",
    i18n: "./lib/vue-i18n/vue-i18n.min",
    css: "./lib/require-css/css.min",
    BButton: "./lib/buefy/components/button/index.min",
    BInput: "./lib/buefy/components/input/index.min",
    BIcon: "./lib/buefy/components/icon/index.min",
    BSwitch: "./lib/buefy/components/switch/index.min",
    BUpload: "./lib/buefy/components/upload/index.min",
    GirdLayout: "./lib/vue-grid-layout/vue-grid-layout.umd.min",
    Draggable: "./lib/vuedraggable/vuedraggable.umd.min",
    "sf-button": "./component/button/index",
    "sf-input": "./component/input/index",
    "sf-icon": "./component/icon/index",
    "sf-title-content": "./component/titleContent/index",
    "sf-label-value": "./component/labelValue/index",
    "sf-switch": "./component/switch/index",
    "sf-upload": "./component/upload/index",
    "sf-theme": "./component/theme/index",
    "sf-grid-layout": "./component/gridLayout/index",
    "sf-dnd": "./component/dnd/index"
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
      require(["vue", "axios", "i18n"], function(Vue, axios, i18n) {
        debugger;
        // ajax请求
        Vue.prototype.$sf = {
          http: axios
        };
        var components = ops.components;
        // 初始组件
        require(components, function() {
          var componentList = arguments;
          var plugins = ops.plugins;
          // 初始插件
          require(plugins, function() {
            for (var i = 0; i < arguments.length; i++) {
              Vue.prototype.$sf[plugins[i]] = arguments[i];
            }
            var _components = {};
            for (var i = 0; i < componentList.length; i++) {
              var record = componentList[i];
              _components[record.name] = record;
            }
            // 创建根实例
            new Vue({
              el: "#app",
              i18n,
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
