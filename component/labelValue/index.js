define(["css!./component/labelValue/index.css"], function() {
  "use strict";
  return {
    name: "sf-label-value",
    inheritAttrs: false,
    props: {
      label: {
        type: String,
        default: "标签"
      },
      border: {
        type: Boolean,
        default: true
      },
      alignCenter: {
        type: Boolean,
        default: true
      },
      alignCenterValue: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classnames: function() {
        var res = ["sf-label-value"];
        if (!this.border) res.push("sf-label-value-noborder");
        if (this.alignCenter) res.push("sf-label-value-alignCenter");
        if (this.alignCenterValue) res.push("sf-label-value-alignCenterValue");
        return res;
      }
    },
    template:
      '<ul :class="classnames" v-bind="this.$attr">\
        <li>{{ label }}</li>\
        <li>\
        <slot></slot>\
        </li>\
        </ul>'
  };
});
