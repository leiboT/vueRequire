define(["ECheckboxGroup"], function(ECheckboxGroup) {
  "use strict";
  return {
    name: "sf-checkbox-group",
    functional: true,
    render: function(createElement, context) {
      return createElement(ECheckboxGroup, context.data, context.children);
    }
  };
});
