define([
  "BInput",
  "css!./component/input/index.css",
  "css!./lib/buefy/css/buefy.min.css",
  "css!./lib/buefy/css/materialdesignicons.min.css"
], function(BInput) {
  "use strict";
  return {
    name: "sf-input",
    functional: true,
    render: function(createElement, context) {
      return createElement(BInput.BInput, context.data, context.children);
    }
  };
});
