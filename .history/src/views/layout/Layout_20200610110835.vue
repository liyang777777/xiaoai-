<template>
  <!-- 公共部分 -->

  <!-- 头部 -->
  <div class="conter">
    <el-container>
      <el-header style="height: 50px">
        <div class="box1">欢迎{{this.user}}来到小爱后台管理系统</div>
        <div class="box2">xxx好,亲爱的{{this.user}}上次登录时间: xxxx</div>
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
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">已发布</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-pie-chart"></i>
              <span slot="title">统计</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-edit-outline"></i>
              <span slot="title">发表文章</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-document"></i>
              <span slot="title">标签页</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-takeaway-box"></i>
              <span slot="title">导出Excel</span>
            </el-menu-item>
            <el-menu-item index="7">
              <i class="el-icon-money"></i>
              <span slot="title">图片上传</span>
            </el-menu-item>
            <el-menu-item index="8">
              <i class="el-icon-switch-button"></i>
              <span slot="title" @click="signOut">退出系统</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <!-- 详情栏 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>