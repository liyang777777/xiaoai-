<template>
  <!-- 导出Excel -->
  <div class="content">
    <el-input v-model="input" placeholder="请输入您想搜索的商品名称" class="box"></el-input>
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
  height: 200px;
  display: flex;
  background: rosybrown;
}
</style>