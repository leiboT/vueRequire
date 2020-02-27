sf.init({
  components: ["sf-button", "sf-grid-layout"],
  plugins: ["lodash", "moment", "mousetrap"],
  data: {
    canOpen: false,
    isEdit: false,
    selectedModel: {},
    steps: [],
    modelMap: {},
    modelList: [],
    layout: []
  },
  created: function() {
    this.modelList = [
      {
        name: "销售管理",
        type: 0,
        children: [
          { name: "订单管理", icon: "", desc: "昨日接单总数", count: 3 }
        ]
      },
      { name: "拆单管理", type: 1 },
      { name: "采购管理", type: 2 }
    ];
    var layout = sessionStorage.getItem("layout");
    if (layout) {
      this.layout = JSON.parse(layout);
    }
  },
  methods: {
    moment: function(value){
      return this.$sf.moment(value).format("ddd, hA")
    },
    modelItemAdd: function(item) {
      debugger;
    },
    modelAdd: function() {
      var end;
      var last;
      var len = this.layout.length;
      this.layout.forEach(function(item, index) {
        if (!end) {
          end = item;
        } else {
          if (
            item.x + item.y > end.x + end.y ||
            (item.x + item.y === end.x + end.y && item.y > end.y)
          ) {
            end = item;
          }
        }
        if (index >= len - 1) last = item;
      });
      var row = {
        x: 0,
        y: 0,
        w: 6,
        h: 6,
        i: 0,
        name: this.selectedModel.name,
        type: this.selectedModel.type,
        children: this.selectedModel.children
      };
      if (end) {
        row.i = last.i + 1;
        if (end.x + end.w <= 6) {
          row.x = end.x + end.w;
          row.y = end.y;
        } else {
          row.y = end.y + end.h;
        }
      }
      this.layout.push(row);
    },
    prevStep: function() {},
    modelDel: function(index) {
      this.layout.splice(index, 1);
    },
    save: function() {
      sessionStorage.setItem("layout", JSON.stringify(this.layout));
    },
    layoutUpdatedEvent: function(newLayout) {}
  }
});
