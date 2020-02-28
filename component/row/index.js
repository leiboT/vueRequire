define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "row",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.Row, context.data, context.children);
    }
  };
});
