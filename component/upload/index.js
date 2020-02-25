define([
  "BUpload",
  "css!./component/upload/index.css",
  "css!./lib/buefy/css/buefy.min.css",
  "css!./lib/buefy/css/materialdesignicons.min.css"
], function(BUpload) {
  "use strict";
  return {
    name: "sf-upload",
    functional: true,
    render: function(createElement, context) {
      return createElement(BUpload.BUpload, context.data, context.children);
    }
  };
});
