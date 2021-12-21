<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          alt="头像"
        ></el-avatar>
        <el-divider content-position="left">介绍</el-divider>
        <div class="introduce">
        <p>这是一个中国人口中心轨迹变化的图，主要展示十年内某国家的变迁轨迹</p>
        </div>
        <br>
        <el-button type="warning" plain @click="logout">退出</el-button>
      </el-aside>
      <el-container>
        <el-header>
          <el-menu
            mode="horizontal"
            active-text-color="rgb(144, 195, 225)"
            :unique-opened="true" :router="true" :default-active="activePath"
          >
          <el-submenu index=1>
            <template slot="title">
              <span @click="toMaps" >地图1</span>
            </template>
          </el-submenu>
          <el-submenu index=2>
            <template slot="title">
              <span @click="toMaps2" >地图2</span>
            </template>
          </el-submenu>
          <el-submenu index=3>
            <template slot="title">
              <span @click="toTest">test</span>
            </template>
          </el-submenu>

          </el-menu>
        </el-header>
        <el-main>
             <!-- 路由占位符 -->
          <router-view></router-view>
        </el-main>
        <!-- <el-footer>@copyright : RENKOU</el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      circleUrl: '../assets/img/img1.png',
      menulist: [],
      // 被激活的链接地址
      activePath: '',
      username: ''
    }
  },
  // created () {
  //   this.getMenuList()
  //   this.activePath = window.sessionStorage.getItem('activePath')
  //   this.username = window.sessionStorage.getItem('username')
  //   this.mobile = window.sessionStorage.getItem('mobile')
  //   console.log(this.username)
  //   console.log(this.mobile)
  // },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 获取所有菜单
    // async getMenuList () {
    //   const { data: res } = await this.$http.get('menus')
    //   if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
    //   this.menulist = res.data
    //   // console.log(res)
    // },
    // // 保存链接的激活状态
    // saveNavState (activePath) {
    //   window.sessionStorage.setItem('activePath', activePath)
    //   this.activePath = activePath
    // }

    toMaps () {
       this.$router.push('/maps')
    },
    toMaps2 () {
       this.$router.push('/maps2')
    },
    toTest () {
       this.$router.push('/test')
    }
    // // 保存链接的激活状态
    // saveNavState (activePath) {
    //   window.sessionStorage.setItem('activePath', activePath)
    //   this.activePath = activePath
    // }


  }
}
</script>

<style lang='less' scoped>
.el-aside{
  margin-top: 10px;
}
.el-container {
  width: 1100px;
  height: 53rem;
  margin: 0 auto;
  background-color: aliceblue;
}
.el-aside {
  text-align: center;
}
.el-divider__text {
  background-color: aliceblue;
}
.el-button{
    margin: 10px 0;
}
.introduce {
  padding: 0 0 0 .8rem;
  font-size: 1rem;
}
</style>
