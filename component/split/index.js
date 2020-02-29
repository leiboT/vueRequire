define(["vue", "splitpanes", "css!../lib/splitpanes/splitpanes.css"], function (Vue, splitpanes) {
  "use strict";
  Vue.component("sf-split-pane", splitpanes.Pane)
  return {
    name: "split",
    components: {
      "sf-split-pane": splitpanes.Pane
    },
    functional: true,
    render: function (createElement, context) {
      return createElement(splitpanes.Splitpanes, context.data, context.children);
    }
  };
});
