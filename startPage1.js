sf.init({
  components: ["sf-dnd"],
  methods: {
    end: function() {
      console.log(this);
    },
    checkMove: function(e, b) {
      console.log(e, b);
    }
  },
  data: {
    list: [
      {
        title: "销售管理",
        children: [
          {
            title: "新增订单",
            text: "今日新增订单数",
            icon: "",
            count: 3
          },
          {
            title: "订单管理",
            text: "昨日接单总数",
            icon: "",
            count: 3
          },
          {
            title: "订单评审",
            text: "评审订单数",
            icon: "",
            count: 3
          },
          {
            title: "报价",
            text: "待报价订单数",
            icon: "",
            count: 3
          },
          {
            title: "一键发货",
            text: "待发货订单数",
            icon: "",
            count: 3
          }
        ]
      },
      {
        title: "拆单管理",
        children: [
          {
            title: "物料拆单",
            text: "待物料拆单订单数",
            icon: "",
            count: 3
          },
          {
            title: "工艺拆单",
            text: "待工艺拆单订单数",
            icon: "",
            count: 3
          },
          {
            title: "包装拆单",
            text: "待包装拆单订单数",
            icon: "",
            count: 3
          }
        ]
      },
      {
        title: "采购管理",
        children: [
          {
            title: "新增采购单",
            text: "今日新增采购单数",
            icon: "",
            count: 3
          },
          {
            title: "采购管理",
            text: "昨日新增采购单数",
            icon: "",
            count: 3
          },
          {
            title: "采购单收货",
            text: "采购单待收货订单数",
            icon: "",
            count: 3
          }
        ]
      }
    ]
  }
});
