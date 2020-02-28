define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "upload",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.Upload, context.data, context.children);
    }
  };
});
