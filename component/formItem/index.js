define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "form-item",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.FormItem, context.data, context.children);
    }
  };
});
