define(["css!../component/titleContent/index.css"], function() {
  "use strict";
  return {
    name: "title-content",
    inheritAttrs: false,
    props: {
      title: {
        type: String,
        default: "标题"
      }
    },
    template:
      '<ul class="sf-title-content" v-bind="$attrs">\
    <li>\
    <span>{{ title }}</span>\
    </li>\
    <li>\
    <slot></slot>\
    </li>\
    </ul>'
  };
});
