define(["EButton"], function(EButton) {
  "use strict";
  return {
    name: "sf-button",
    functional: true,
    render: function(createElement, context) {
      return createElement(EButton, context.data, context.children);
    }
  };
});
