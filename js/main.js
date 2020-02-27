"use strict";
requirejs.config({
  baseURL: "/js",
  // 模块路径配置
  paths: {
    vue: "./lib/vue/vue",
    vueI18n: "./lib/vue-i18n/vue-i18n.min",
    lazyload: "./lib/vue-lazyload/vue-lazyload",
    jquery: "./lib/jquery/jquery.min",
    polyfill: "./lib/babel-polyfill/polyfill.min",
    moment: "./lib/moment/moment.min",
    mousetrap: "./lib/mousetrap/mousetrap.min",
    push: "./lib/push/push.min",
    sortablejs: "./lib/sortable/sortable.min",
    axios: "./lib/axios/axios.min",
    css: "./lib/require-css/css.min",
    EZhCNLang: "./lib/element-ui/locale/zh-CN",
    EEnLang: "./lib/element-ui/locale/en",
    EButton: "./lib/element-ui/button",
    EInput: "./lib/element-ui/input",
    ESwitch: "./lib/element-ui/switch",
    EUpload: "./lib/element-ui/upload",
    ERow: "./lib/element-ui/row",
    ECol: "./lib/element-ui/col",
    ERadio: "./lib/element-ui/radio",
    ERadioButton: "./lib/element-ui/radio-button",
    ERadioGroup: "./lib/element-ui/radio-group",
    ECheckbox: "./lib/element-ui/checkbox",
    ECheckboxButton: "./lib/element-ui/checkbox-button",
    ECheckboxGroup: "./lib/element-ui/checkbox-group",
    EInputNumber: "./lib/element-ui/input-number",
    ESelect: "./lib/element-ui/select",
    EOption: "./lib/element-ui/option",
    EOptionGroup: "./lib/element-ui/option-group",
    ECascader: "./lib/element-ui/cascader",
    EDrawer: "./lib/element-ui/drawer",
    ELoading: "./lib/element-ui/loading",
    EMessage: "./lib/element-ui/message",
    EMessageBox: "./lib/element-ui/message-box",
    ENotification: "./lib/element-ui/notification",
    GirdLayout: "./lib/vue-grid-layout/vue-grid-layout.umd.min",
    Draggable: "./lib/vuedraggable/vuedraggable.umd.min",
    agGrid: "./lib/ag-grid-enterprise/dist/ag-grid-enterprise.min.noStyle",
    AGGridVue: "./lib/ag-grid-vue/ag-grid-vue.umd.min",
    // 后续优化：为进一步减少组件体积 基于elementUI已构建完成的组件js（已重新打包但组件间还是有公共代码）编写的组件 后续全部替换为其Vue单文件实现
    "sf-button": "./component/button/index",
    "sf-input": "./component/input/index",
    "sf-icon": "./component/icon/index",
    "sf-title-content": "./component/titleContent/index",
    "sf-label-value": "./component/labelValue/index",
    "sf-switch": "./component/switch/index",
    "sf-upload": "./component/upload/index",
    "sf-theme": "./component/theme/index",
    "sf-grid-layout": "./component/gridLayout/index",
    "sf-dnd": "./component/dnd/index",
    "sf-row": "./component/row/index",
    "sf-col": "./component/col/index",
    "sf-radio": "./component/radio/index",
    "sf-radio-button": "./component/radioButton/index",
    "sf-radio-group": "./component/radioGroup/index",
    "sf-checkbox": "./component/checkbox/index",
    "sf-checkbox-button": "./component/checkboxButton/index",
    "sf-checkbox-group": "./component/checkboxGroup/index",
    "sf-input-number": "./component/inputNumber/index",
    "sf-select": "./component/select/index",
    "sf-option": "./component/option/index",
    "sf-option-group": "./component/optionGroup/index",
    "sf-cascader": "./component/cascader/index",
    "sf-drawer": "./component/drawer/index",
    "sf-table": "./component/table/index"
  },
  shim: {},
  map: {}
});

(function() {
  function SF() {
    this.init = function(ops) {
      require(["polyfill"], function() {
        require([
          "vue",
          "axios",
          "ELoading",
          "EMessage",
          "EMessageBox",
          "ENotification",
          "vueI18n",
          "EZhCNLang",
          "EEnLang",
          // "lazyload",
          "css!./lib/normalize/normalize.min.css",
          "css!./lib/minireset/minireset.min.css",
          "css!./lib/element-ui/theme-chalk/index.css"
        ], function(
          Vue,
          axios,
          ELoading,
          EMessage,
          EMessageBox,
          ENotification,
          VueI18n,
          EZhCNLang,
          EEnLang
        ) {
          // 挂载实例方法
          Vue.use(ELoading);
          Vue.prototype.$message = EMessage;
          Vue.prototype.$alert = EMessageBox.alert;
          Vue.prototype.$confirm = EMessageBox.confirm;
          Vue.prototype.$prompt = EMessageBox.prompt;
          Vue.prototype.$notification = ENotification;
          // 初始化实例属性
          //
          Vue.prototype.User = {};
          Vue.prototype.Command = {};
          Vue.prototype.sf = {
            http: axios
          };
          // 语言包依赖 暂只处理中文英文语言环境
          var localeRely = ops.UId ? ["./i18n/" + ops.UId] : [];
          require(localeRely, function(rely) {
            // i18n 初始化
            Vue.use(VueI18n);
            var lang = rely || ops.i18n;
            if (lang) {
              Object.assign(lang.cn.message, EZhCNLang.el);
              Object.assign(lang.en.message, EEnLang.el);
            }
            var i18n = new VueI18n({
              locale: "cn",
              messages: lang
            });
            // Vue.use(lazyload);
            var components = ops.components;
            // 引入组件
            require(components, function() {
              var componentList = arguments;
              var plugins = ops.plugins;
              // 引入插件
              require(plugins, function() {
                // 挂载插件
                for (var i = 0; i < arguments.length; i++) {
                  Vue.prototype.sf[plugins[i]] = arguments[i];
                }
                var _components = {};
                for (var i = 0; i < componentList.length; i++) {
                  var record = componentList[i];
                  _components[record.name] = record;
                }
                // 创建根实例
                new Vue({
                  el: "#app",
                  i18n: i18n,
                  components: _components,
                  created: ops.created,
                  mounted: ops.mounted,
                  watch: ops.watch,
                  computed: ops.computed,
                  data: ops.data,
                  methods: ops.methods
                });
              });
            });
          });
        });
      });
    };
  }

  window.sf = new SF();
})();
