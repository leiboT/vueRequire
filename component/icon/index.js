define([
  "BIcon",
  "css!./component/icon/index.css",
  "css!./lib/buefy/css/buefy.min.css",
  "css!./lib/buefy/css/materialdesignicons.min.css"
], function(BIcon) {
  "use strict";
  return {
    name: "sf-icon",
    functional: true,
    render: function(createElement, context) {
      return createElement(BIcon.BIcon, context.data, context.children);
    }
  };
});
