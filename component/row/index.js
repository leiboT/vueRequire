define(["ERow"], function(ERow) {
  "use strict";
  return {
    name: "sf-row",
    functional: true,
    render: function(createElement, context) {
      return createElement(ERow, context.data, context.children);
    }
  };
});
