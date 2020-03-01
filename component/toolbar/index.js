define(["sf-button", "ELIndex", "css!../component/toolbar/index.css"], function(
  sfButton,
  ELIndex
) {
  "use strict";
  return {
    name: "toolbar",
    components: {
      sfButton: sfButton,
      sfInput: ELIndex.Input
    },
    data: function() {
      return {
        newKeyword: this.keyword
      };
    },
    props: {
      buttons: {
        type: Object,
        default: {}
      },
      keyword: {
        type: String,
        default: ""
      }
    },
    computed: {
      buttonArr: function() {
        var buttons = this.buttons;
        return Object.keys(buttons).map(function(key) {
          return buttons[key];
        });
      }
    },
    template:
      '<ul class="sf-toolbar">\
      <li>\
      <sf-button v-for="(button, index) in buttonArr" :key="index" v-bind="button" @click="button.click">{{button.text}}</sf-button>\
      </li>\
      <li>\
      <sf-input v-model="newKeyword" placeholder="搜索">\
      <sf-button @click="$listeners.search(newKeyword)" slot="append" icon="el-icon-search"></sf-button>\
      </sf-input>\
      </li>\
    </ul>'
  };
});
