define(["Draggable", "css!../component/dnd/index.css"], function(Draggable) {
  "use strict";
  return {
    name: "dnd",
    functional: true,
    render: function(createElement, context) {
      return createElement(Draggable, context.data, context.children);
    }
  };
});
