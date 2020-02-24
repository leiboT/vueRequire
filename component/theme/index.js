define(["css!./component/theme/index.css"], function() {
  "use strict";
  return {
    name: "sf-theme",
    data: function() {
      return {
        themeList: ["blue", "red", "pink", "green", "purple"]
      };
    },
    model: {
      event: "change"
    },
    props: {
      value: {
        type: String
      },
      change: {
        type: Function
      }
    },
    methods: {
      itemClick: function(value) {
        this.$emit("change", value);
      }
    },
    template:
      '<ul class="sf-theme">\
      <li v-for="item in themeList" :key="item" @click="itemClick(item)" :style="{borderColor: item, backgroundColor: item === value ? item : null}"></li>\
      </ul>'
  };
});
