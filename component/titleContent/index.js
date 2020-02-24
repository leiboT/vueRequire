define(["css!./component/titleContent/index.css"], function() {
  "use strict";
  return {
    name: "sf-title-content",
    props: {
      title: {
        type: String,
        default: "标题"
      }
    },
    template:
      '<ul class="sf-title-content" v-bind="this.$attr">\
    <li>\
    <span>{{ title }}</span>\
    </li>\
    <li>\
    <slot></slot>\
    </li>\
    </ul>'
  };
});
