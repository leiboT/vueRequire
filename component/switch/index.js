define(["ESwitch"], function(ESwitch) {
  "use strict";
  return {
    name: "sf-switch",
    functional: true,
    render: function(createElement, context) {
      return createElement(ESwitch, context.data, context.children);
    }
  };
});
