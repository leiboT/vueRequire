define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "switch",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.Switch, context.data, context.children);
    }
  };
});
