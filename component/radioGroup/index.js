define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "radio-group",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.RadioGroup, context.data, context.children);
    }
  };
});
