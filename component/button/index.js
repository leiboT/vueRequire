define([
  "BButton",
  "css!./component/button/index.css",
  "css!./lib/buefy/css/buefy.min.css",
  "css!./lib/buefy/css/materialdesignicons.min.css"
], function(BButton) {
  "use strict";
  return {
    name: "sf-button",
    functional: true,
    render: function(createElement, context) {
      return createElement(BButton.BButton, context.data, context.children);
    }
  };
});
