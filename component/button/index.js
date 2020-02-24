define(["BButton", "css!./component/button/index.css"], function(BButton) {
  "use strict";
  return {
    name: "sf-button",
    functional: true,
    render: function(createElement, context) {
      return createElement(BButton.BButton, context.data, context.children);
    }
  };
});
