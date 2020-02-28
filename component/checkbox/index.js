define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "checkbox",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.Checkbox, context.data, context.children);
    }
  };
});
