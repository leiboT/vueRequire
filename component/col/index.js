define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "col",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.Col, context.data, context.children);
    }
  };
});
