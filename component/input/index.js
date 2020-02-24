define(["BInput", "css!./component/input/index.css"], function(BInput) {
  "use strict";
  return {
    name: "sf-input",
    functional: true,
    render: function(createElement, context) {
      return createElement(BInput.BInput, context.data, context.children);
    }
  };
});
