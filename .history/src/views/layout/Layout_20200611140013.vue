<template>
  <!-- 公共部分 -->

  <!-- 头部 -->
  <div class="conter">
    <el-container>
      <el-header style="height: 50px">
        <div class="wordOne">欢迎{{this.user}}来到小爱后台管理系统</div>
        <div class="wordTwo">xxx好,亲爱的{{this.user}}上次登录时间: xxxx</div>
      </el-header>

      <!-- 导航栏 -->
      <el-container>
        <el-aside width="150px">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">
              <i class="el-icon-location"></i>
              <span slot="title" @click="Detail">首页</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title" @click="Detail1">已发布</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-pie-chart"></i>
              <span slot="title" @click="Detail2">统计</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-edit-outline"></i>
              <span slot="title" @click="Detail3">发表文章</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-document"></i>
              <span slot="title" @click="Detail4">标签页</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-takeaway-box"></i>
              <span slot="title" @click="Detail5">导出Excel</span>
            </el-menu-item>
            <el-menu-item index="7">
              <i class="el-icon-money"></i>
              <span slot="title" @click="Detail6">图片上传</span>
            </el-menu-item>
            <el-menu-item index="8">
              <i class="el-icon-switch-button"></i>
              <span slot="title" @click="Detail7">退出系统</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <!-- 详情栏 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <!-- <div class="head">
      <nav-header></nav-header>
    </div>
    <div class="content">
      <div>
        <nav-left></nav-left>
      </div>
      <div class="item">
        <router-view></router-view>
      </div>
    </div> -->
  </div>
</template>

<script>
import NavHeader from "../../components/detail/NavHeader";
import NavLeft from "../../components/detail/NavLeft";
export default {
  name: "Layout",
  props: {},
  components: {
    NavHeader,
    NavLeft
  },
  data() {
    return {
      user: ""
    };
  },
  methods: {
    Detail() {
      this.$router.push("/detail");
      
    },
     Detail1() {
      this.$router.push("/detail1");
      
    },
     Detail2() {
      this.$router.push("/detail2");
      
    },
     Detail3() {
      this.$router.push("/detail3");
      
    },
     Detail4() {
      this.$router.push("/detail4");
      
    },
     Detail5() {
      this.$router.push("/detail5");
      
    },
     Detail6() {
      this.$router.push("/detail6");
      
    },
      Detail7() {
      this.$router.push("/detail7");
      
    },
  },
  mounted() {
    this.user = localStorage.getItem("user");
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 40px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.wordOne {
  width: 20%;
  font-size: 14px;
  padding-left: 28px;
  display: flex;
  margin-top: 10px;
  justify-content: flex-start;
}
.wordTwo {
  width: 30%;
  font-size: 14px;
  padding-right: 28px;
  display: flex;
  margin-top: -40px;
  margin-left: 850px;
  justify-content: flex-end;
}
</style>