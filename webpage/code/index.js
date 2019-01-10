new Vue({
  el: "#app",
  data: {
    url: ""
  },
  async created() {
    const login = await axios.get("/data/isLogin")
    console.log(typeof login, login)
    // if (login.data) {
    //   this.url = "./view/launcher/main.html"
    // } else {
      this.url = "./view/login/main.html"
    // }
    // await this.$zl.http.post("/data/register", { name: "zh", password: "zh19950920" })
  }
})