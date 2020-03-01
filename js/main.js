"use strict";
requirejs.config({
  baseUrl: "/js",
  waitSeconds: 0,
  // 模块路径配置
  paths: {
    vue: "../lib/vue@2.6.11/vue",
    vueI18n: "../lib/vue-i18n@8.15.3/vue-i18n.min",
    axios: "../lib/axios/axios.min",
    jquery: "../lib/jquery/jquery.min",
    moment: "../lib/moment/moment.min",
    layer: "../lib/layer/layer",
    mousetrap: "../lib/mousetrap/mousetrap.min",
    push: "../lib/push/push.min",
    sortablejs: "../lib/sortable/sortable.min",
    splitpanes: "../lib/splitpanes/splitpanes.umd.min",
    EZhCNLang: "../lib/element-ui@2.13.0/locale/zh-CN",
    EEnLang: "../lib/element-ui@2.13.0/locale/en",
    ELIndex: "../lib/element-ui@2.13.0/index",
    GirdLayout: "../lib/vue-grid-layout/vue-grid-layout.umd.min",
    Draggable: "../lib/vuedraggable/vuedraggable.umd.min",
    agGrid: "../lib/ag-grid-enterprise/ag-grid-enterprise.min.noStyle",
    AGGridVue: "../lib/ag-grid-vue/ag-grid-vue.umd.min",
    AGGridVueLocale: "../lib/ag-grid-vue/locale",
    // 后续优化：为进一步减少组件体积 基于elementUI已构建完成的组件js（已重新打包但组件间还是有公共代码）编写的组件 后续全部替换为其Vue单文件实现
    "sf-button": "../component/button/index",
    "sf-input": "../component/input/index",
    "sf-icon": "../component/icon/index",
    "sf-title-content": "../component/titleContent/index",
    "sf-label-value": "../component/labelValue/index",
    "sf-switch": "../component/switch/index",
    "sf-upload": "../component/upload/index",
    "sf-theme": "../component/theme/index",
    "sf-grid-layout": "../component/gridLayout/index",
    "sf-dnd": "../component/dnd/index",
    "sf-row": "../component/row/index",
    "sf-col": "../component/col/index",
    "sf-radio": "../component/radio/index",
    "sf-radio-button": "../component/radioButton/index",
    "sf-radio-group": "../component/radioGroup/index",
    "sf-checkbox": "../component/checkbox/index",
    "sf-checkbox-button": "../component/checkboxButton/index",
    "sf-checkbox-group": "../component/checkboxGroup/index",
    "sf-input-number": "../component/inputNumber/index",
    "sf-select": "../component/select/index",
    "sf-option": "../component/option/index",
    "sf-option-group": "../component/optionGroup/index",
    "sf-cascader": "../component/cascader/index",
    "sf-drawer": "../component/drawer/index",
    "sf-table": "../component/table/index",
    "sf-split": "../component/split/index",
    "sf-form": "../component/form/index",
    "sf-form-item": "../component/formItem/index",
    "sf-date-picker": "../component/datePicker/index",
    "sf-time-picker": "../component/timePicker/index",
    "sf-toolbar": "../component/toolbar/index",
    "sf-dialog": "../component/dialog/index",
  },
  shim: {
    layer: {
      deps: ["css!../lib/layer/theme/default/layer.css"]
    }
  }
});

(function() {
  function SF() {
    var _sf = this;
    /**
     * 平台初始化
     * @param {Object} ops
     */
    this.init = function(ops) {
      require([
        "initVue",
        "css!../css/reset.css",
        "css!../lib/element-ui@2.13.0/css/index.css"
      ], function(initVue) {
        initVue(ops, function(vueInstance) {
          require(["request", "utlis"], function(request, utlis) {
            // 初始化sf.Command sf.Plugin
            require([
              "command",
              "pluginsHandler",
              "numberPrecision"
            ], function(command, pluginsHandler, numberPrecision) {
              pluginsHandler(ops.plugins, function(plugins) {
                _sf.Command = Object.assign(
                  {},
                  command,
                  request,
                  utlis,
                  numberPrecision
                );
                _sf.Plugin = plugins;
                if (utlis.IsFunction(ops.init)) {
                  ops.init.call(vueInstance);
                }
              });
            });
          });
        });
      });
    };
  }
  // 创建SF实例
  window.sf = new SF();
})();
