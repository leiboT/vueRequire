define(["GirdLayout", "vue", "css!../component/gridLayout/index.css"], function(
  GirdLayout,
  Vue
) {
  "use strict";
  Vue.component("sfGridLayoutItem", GirdLayout.GridItem);
  return {
    name: "grid-layout",
    functional: true,
    render: function(createElement, context) {
      return createElement(
        GirdLayout.GridLayout,
        context.data,
        context.children
      );
    }
  };
});
