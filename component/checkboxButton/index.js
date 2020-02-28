define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "checkbox-button",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.CheckboxButton, context.data, context.children);
    }
  };
});
