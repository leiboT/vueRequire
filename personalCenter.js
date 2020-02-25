sf.init({
  components: [
    "sf-title-content",
    "sf-button",
    "sf-label-value",
    "sf-switch",
    "sf-upload",
    "sf-input",
    "sf-theme"
  ],
  plugins: ["push"],
  data: {
    api: {},
    info: {
      username: "",
      name: "",
      phone: "",
      email: "",
      password: "",
      avatar: []
    },
    theme: "blue",
    notification: false
  },
  created: function() {
    // debugger;
  },
  methods: {
    edit: function() {
      debugger;
    },
    notificationToggle: function(value) {
      this.notification = value;
      this.$sf.push.create("Hello World!");
    }
  }
});
