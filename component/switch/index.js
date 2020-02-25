define([
  "BSwitch",
  "css!./component/switch/index.css",
  "css!./lib/buefy/css/buefy.min.css"
], function(BSwitch) {
  "use strict";
  return {
    name: "sf-switch",
    functional: true,
    render: function(createElement, context) {
      return createElement(BSwitch.BSwitch, context.data, context.children);
    }
  };
});
