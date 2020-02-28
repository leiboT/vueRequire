define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "cascader",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.Cascader, context.data, context.children);
    }
  };
});
