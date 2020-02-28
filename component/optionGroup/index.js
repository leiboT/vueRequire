define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "option-group",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.OptionGroup, context.data, context.children);
    }
  };
});
