define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "dialog",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.Dialog, context.data, context.children);
    }
  };
});
