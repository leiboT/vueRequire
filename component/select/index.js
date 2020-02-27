define(["ESelect"], function(ESelect) {
  "use strict";
  return {
    name: "sf-select",
    functional: true,
    render: function(createElement, context) {
      return createElement(ESelect, context.data, context.children);
    }
  };
});
