sf.init({
  i18n: {
    cn: {
      message: {
        row: "行",
        col: "列",
        default: "默认",
        primary: "主色",
        pleaseInput: "请输入",
        clickUpload: "点击上传",
        pleaseSelect: "请选择",
        clickOpen: "点我打开",
        title: "标题",
        message: "我来啦",
        confirmClose: "确认关闭？"
      }
    },
    en: {
      message: {
        row: "row",
        col: "col",
        default: "default",
        primary: "primary",
        pleaseInput: "please input",
        clickUpload: "click upload",
        pleaseSelect: "please select",
        clickOpen: "click open",
        title: "title",
        message: "I'm coming",
        confirmClose: "Confirm Close?"
      }
    }
  },
  components: [
    "sf-row",
    "sf-col",
    "sf-button",
    "sf-input",
    "sf-switch",
    "sf-upload",
    "sf-checkbox",
    "sf-checkbox-button",
    "sf-checkbox-group",
    "sf-radio",
    "sf-radio-button",
    "sf-radio-group",
    "sf-input-number",
    "sf-select",
    "sf-option",
    "sf-option-group",
    "sf-cascader",
    "sf-drawer",
    "sf-table"
  ],
  plugins: ["jquery"],
  created: function() {
    this.$message({
      message: this.$t("message.message")
    });
  },
  methods: {
    handleChange: function(value) {},
    handleClose: function(done) {
      this.$confirm(this.$t("message.confirmClose"))
        .then(function() {
          done();
        })
        .catch(function() {});
    }
  },
  data: {
    input: "",
    password: "",
    radio: "1",
    radioButton: "1",
    checkList: [],
    checkboxButton: [],
    num: 1,
    select: "",
    selectList: [],
    selectGroup: "",
    selectAllowCreate: "",
    selectAllowCreateMultiple: [],
    langs: [
      { label: "中文", value: "cn" },
      { label: "English", value: "en" }
    ],
    options: [
      {
        value: "选项1",
        label: "黄金糕"
      },
      {
        value: "选项2",
        label: "双皮奶"
      },
      {
        value: "选项3",
        label: "蚵仔煎"
      },
      {
        value: "选项4",
        label: "龙须面"
      },
      {
        value: "选项5",
        label: "北京烤鸭"
      }
    ],
    optionsGroup: [
      {
        label: "热门城市",
        options: [
          {
            value: "Shanghai",
            label: "上海"
          },
          {
            value: "Beijing",
            label: "北京"
          }
        ]
      },
      {
        label: "城市名",
        options: [
          {
            value: "Chengdu",
            label: "成都"
          },
          {
            value: "Shenzhen",
            label: "深圳"
          },
          {
            value: "Guangzhou",
            label: "广州"
          },
          {
            value: "Dalian",
            label: "大连"
          }
        ]
      }
    ],
    cascader: [],
    cascaderOptions: [
      {
        value: "zhinan",
        label: "指南",
        children: [
          {
            value: "shejiyuanze",
            label: "设计原则",
            children: [
              {
                value: "yizhi",
                label: "一致"
              },
              {
                value: "fankui",
                label: "反馈"
              },
              {
                value: "xiaolv",
                label: "效率"
              },
              {
                value: "kekong",
                label: "可控"
              }
            ]
          },
          {
            value: "daohang",
            label: "导航",
            children: [
              {
                value: "cexiangdaohang",
                label: "侧向导航"
              },
              {
                value: "dingbudaohang",
                label: "顶部导航"
              }
            ]
          }
        ]
      },
      {
        value: "zujian",
        label: "组件",
        children: [
          {
            value: "basic",
            label: "Basic",
            children: [
              {
                value: "layout",
                label: "Layout 布局"
              },
              {
                value: "color",
                label: "Color 色彩"
              },
              {
                value: "typography",
                label: "Typography 字体"
              },
              {
                value: "icon",
                label: "Icon 图标"
              },
              {
                value: "button",
                label: "Button 按钮"
              }
            ]
          },
          {
            value: "form",
            label: "Form",
            children: [
              {
                value: "radio",
                label: "Radio 单选框"
              },
              {
                value: "checkbox",
                label: "Checkbox 多选框"
              },
              {
                value: "input",
                label: "Input 输入框"
              },
              {
                value: "input-number",
                label: "InputNumber 计数器"
              },
              {
                value: "select",
                label: "Select 选择器"
              },
              {
                value: "cascader",
                label: "Cascader 级联选择器"
              },
              {
                value: "switch",
                label: "Switch 开关"
              },
              {
                value: "slider",
                label: "Slider 滑块"
              },
              {
                value: "time-picker",
                label: "TimePicker 时间选择器"
              },
              {
                value: "date-picker",
                label: "DatePicker 日期选择器"
              },
              {
                value: "datetime-picker",
                label: "DateTimePicker 日期时间选择器"
              },
              {
                value: "upload",
                label: "Upload 上传"
              },
              {
                value: "rate",
                label: "Rate 评分"
              },
              {
                value: "form",
                label: "Form 表单"
              }
            ]
          },
          {
            value: "data",
            label: "Data",
            children: [
              {
                value: "table",
                label: "Table 表格"
              },
              {
                value: "tag",
                label: "Tag 标签"
              },
              {
                value: "progress",
                label: "Progress 进度条"
              },
              {
                value: "tree",
                label: "Tree 树形控件"
              },
              {
                value: "pagination",
                label: "Pagination 分页"
              },
              {
                value: "badge",
                label: "Badge 标记"
              }
            ]
          },
          {
            value: "notice",
            label: "Notice",
            children: [
              {
                value: "alert",
                label: "Alert 警告"
              },
              {
                value: "loading",
                label: "Loading 加载"
              },
              {
                value: "message",
                label: "Message 消息提示"
              },
              {
                value: "message-box",
                label: "MessageBox 弹框"
              },
              {
                value: "notification",
                label: "Notification 通知"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "menu",
                label: "NavMenu 导航菜单"
              },
              {
                value: "tabs",
                label: "Tabs 标签页"
              },
              {
                value: "breadcrumb",
                label: "Breadcrumb 面包屑"
              },
              {
                value: "dropdown",
                label: "Dropdown 下拉菜单"
              },
              {
                value: "steps",
                label: "Steps 步骤条"
              }
            ]
          },
          {
            value: "others",
            label: "Others",
            children: [
              {
                value: "dialog",
                label: "Dialog 对话框"
              },
              {
                value: "tooltip",
                label: "Tooltip 文字提示"
              },
              {
                value: "popover",
                label: "Popover 弹出框"
              },
              {
                value: "card",
                label: "Card 卡片"
              },
              {
                value: "carousel",
                label: "Carousel 走马灯"
              },
              {
                value: "collapse",
                label: "Collapse 折叠面板"
              }
            ]
          }
        ]
      },
      {
        value: "ziyuan",
        label: "资源",
        children: [
          {
            value: "axure",
            label: "Axure Components"
          },
          {
            value: "sketch",
            label: "Sketch Templates"
          },
          {
            value: "jiaohu",
            label: "组件交互文档"
          }
        ]
      }
    ],
    drawer: false,
    direction: "rtl",
    gridOptions: {
      rowSelection: "multiple",
      rowStyle: {
        // background: 'black'
      }
    },
    columnDefs: [
      { headerName: "Make", field: "make" },
      { headerName: "Model", field: "model" },
      { headerName: "Price", field: "price" }
    ],
    rowData: [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 }
    ]
  }
});
