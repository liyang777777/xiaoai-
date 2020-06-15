<template>
  <!-- 导出Excel -->
  <div class="content">
    
    <div>
      <el-input v-model="input" placeholder="请输入您想搜索的商品名称" class="box"></el-input>
    </div>
    <div>
      <el-card>
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
      </el-card>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="10"
        layout="total, prev, pager, next"
        :total="694"
      ></el-pagination>
    </div>
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
.box {
  width: 200px;
  height: 50px;
  display: flex;
}
</style>