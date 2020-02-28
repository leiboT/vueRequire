define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "button",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.Button, context.data, context.children);
    }
  };
});
