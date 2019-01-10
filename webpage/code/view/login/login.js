new Vue({
  el: "#idLogin",
  data: {
    user: {
      name: '',
      password: ''
    },
    rules: {
      name: [
        { required: true, message: '请输入名字' }
      ],
      password: [
        { required: true, message: '请输入密码' }
      ]
    }
  },
  methods: {
    register(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const data = await this.$zl.http.post("/data/register", this.user);
          
        }
      });
    },
    login(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const data = await this.$zl.http.get("/data/login", this.user);
        }
      });
    }
  },
  async created() {
    // const login = await this.$zl.http.get("/data/isLogin");
    // if (login) {
    //   this.url = "./view/launcher/main.html"
    // } else {
    //   this.url = "./view/login/main.html"
    // }
    // await this.$zl.http.post("/data/register", { name: "zh", password: "zh19950920" })
  }
})