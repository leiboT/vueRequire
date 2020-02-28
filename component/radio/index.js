define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "radio",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.Radio, context.data, context.children);
    }
  };
});
