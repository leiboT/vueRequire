define(["ECheckbox"], function(ECheckbox) {
  "use strict";
  return {
    name: "sf-checkbox",
    functional: true,
    render: function(createElement, context) {
      return createElement(ECheckbox, context.data, context.children);
    }
  };
});
