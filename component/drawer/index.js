define(["EDrawer"], function(EDrawer) {
  "use strict";
  return {
    name: "sf-drawer",
    functional: true,
    render: function(createElement, context) {
      return createElement(EDrawer, context.data, context.children);
    }
  };
});
