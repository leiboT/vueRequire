define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "option",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.Option, context.data, context.children);
    }
  };
});
