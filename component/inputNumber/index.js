define(["EInputNumber"], function(EInputNumber) {
  "use strict";
  return {
    name: "sf-input-number",
    functional: true,
    render: function(createElement, context) {
      return createElement(EInputNumber, context.data, context.children);
    }
  };
});
