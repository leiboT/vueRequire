define(["EOptionGroup"], function(EOptionGroup) {
  "use strict";
  return {
    name: "sf-option-group",
    functional: true,
    render: function(createElement, context) {
      return createElement(EOptionGroup, context.data, context.children);
    }
  };
});
