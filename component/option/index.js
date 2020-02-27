define(["EOption"], function(EOption) {
  "use strict";
  return {
    name: "sf-option",
    functional: true,
    render: function(createElement, context) {
      return createElement(EOption, context.data, context.children);
    }
  };
});
