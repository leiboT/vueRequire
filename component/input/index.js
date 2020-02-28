define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "input",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.Input, context.data, context.children);
    }
  };
});
