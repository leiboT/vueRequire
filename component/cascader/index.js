define(["ECascader"], function(ECascader) {
  "use strict";
  return {
    name: "sf-cascader",
    functional: true,
    render: function(createElement, context) {
      return createElement(ECascader, context.data, context.children);
    }
  };
});
