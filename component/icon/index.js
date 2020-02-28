define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "icon",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.Icon, context.data, context.children);
    }
  };
});
