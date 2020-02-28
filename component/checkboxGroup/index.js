define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "checkbox-group",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.CheckboxGroup, context.data, context.children);
    }
  };
});
