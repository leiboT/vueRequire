// 多语言处理模块
define("i18nHandler", [
  "vue",
  "vueI18n",
  "ELIndex",
  "EZhCNLang",
  "EEnLang",
  "AGGridVueLocale"
], function(Vue, VueI18n, ELIndex, EZhCNLang, EEnLang, AGGridVueLocale) {
  "use strict";
  return function(ops, callback) {
    var UId = ops.UId;
    var localeRely = UId ? ["../i18n/" + UId] : [];
    // 业务代码多语言
    require(localeRely, function(rely) {
      Vue.use(VueI18n);
      var lang = {
        cn: {},
        en: {}
      };
      // 合并语言包
      Object.assign(
        lang.cn,
        rely ? rely.cn : {},
        EZhCNLang,
        AGGridVueLocale.cn
      );
      Object.assign(lang.en, rely ? rely.en : {}, EEnLang, AGGridVueLocale.en);
      var i18n = new VueI18n({
        locale: "cn",
        messages: lang
      });
      ELIndex.i18n(function(key, value) {
        return i18n.t(key, value);
      });
      callback(i18n);
    });
  };
});
