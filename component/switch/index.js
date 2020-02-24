define(["BSwitch", "css!./component/switch/index.css"], function(BSwitch) {
  "use strict";
  return {
    name: "sf-switch",
    functional: true,
    render: function(createElement, context) {
      return createElement(BSwitch.BSwitch, context.data, context.children);
    }
  };
});
