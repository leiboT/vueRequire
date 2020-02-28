define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "drawer",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.Drawer, context.data, context.children);
    }
  };
});
