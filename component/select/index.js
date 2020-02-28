define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "select",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.Select, context.data, context.children);
    }
  };
});
