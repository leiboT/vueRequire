define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "input-number",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.InputNumber, context.data, context.children);
    }
  };
});
