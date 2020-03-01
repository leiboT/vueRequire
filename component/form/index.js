define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "form",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.Form, context.data, context.children);
    }
  };
});
