define(["EInput"], function(EInput) {
  "use strict";
  return {
    name: "sf-input",
    functional: true,
    render: function(createElement, context) {
      return createElement(EInput, context.data, context.children);
    }
  };
});
