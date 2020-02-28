define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "radio-button",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.RadioButton, context.data, context.children);
    }
  };
});
