define(["ECol"], function(ECol) {
  "use strict";
  return {
    name: "sf-col",
    functional: true,
    render: function(createElement, context) {
      return createElement(ECol, context.data, context.children);
    }
  };
});
