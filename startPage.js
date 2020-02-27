sf.init({
  components: ["sf-button", "sf-grid-layout", "sf-drawer"],
  data: {
    modelList: [],
    startPageConfig: [],
    isEdit: false,
    isAddModel: false,
    selectedModel: null,
    isAddModelChild: false,
    selectedPageModel: {},
    selectedModelChild: null,
    currentModelChildList: []
  },
  created: function() {
    this.modelList = [
      {
        name: "销售管理",
        id: "0",
        children: [
          {
            id: "0-0",
            name: "订单管理",
            icon: "",
            desc: "昨日接单总数",
            count: 3
          }
        ]
      },
      { name: "拆单管理", id: "1" },
      { name: "采购管理", id: "2" }
    ];
    var startPageConfig = sessionStorage.getItem("startPageConfig");
    if (startPageConfig) {
      this.startPageConfig = JSON.parse(startPageConfig);
    }
  },
  watch: {
    isAddModelChild: function(newValue) {
      if (!newValue) {
        this.selectedPageModel = {};
      }
    }
  },
  methods: {
    addModelChild: function(item) {
      this.isAddModelChild = true;
      var record = this.modelList.find(function(row) {
        return row.id === item.id;
      });
      this.selectedPageModel = item;
      this.currentModelChildList = record.children;
    },
    modelAdd: function() {
      var end;
      var last;
      var len = this.startPageConfig.length;
      this.startPageConfig.forEach(function(item, index) {
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
        id: this.selectedModel.id,
        children: []
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
      this.startPageConfig.push(row);
    },
    modelChildAdd: function() {
      this.selectedPageModel.children.push(this.selectedModelChild);
    },
    modelDel: function(index) {
      this.startPageConfig.splice(index, 1);
    },
    modelChildDel: function(index, list) {
      list.splice(index, 1);
    },
    saveOrEdit: function() {
      if (this.isEdit) {
        sessionStorage.setItem(
          "startPageConfig",
          JSON.stringify(this.startPageConfig)
        );
      }
      this.isEdit = !this.isEdit;
    }
  }
});
