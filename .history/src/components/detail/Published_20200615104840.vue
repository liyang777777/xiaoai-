<template>
  <!-- 发表文章 -->
  <div class="content">
    <div class="box">
      <el-row>
        <el-button @click="btn1" class="box1">查看</el-button>
        <el-button @click="btn2" class="box2">发布</el-button>
      </el-row>
    </div>
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
  <el-form-item label="文章标题">
    <el-input v-model="sizeForm.name"></el-input>
  </el-form-item>
  <el-form-item label="文章摘要">
    <el-input v-model="sizeForm.name"></el-input>
  </el-form-item>
  <el-form-item label="作者">
    <el-input v-model="sizeForm.name"></el-input>
  </el-form-item>
   <el-form-item label="类目">
    <el-select v-model="sizeForm.region" placeholder="请选择">
      <el-option label="类目一" value="shanghai"></el-option>
      <el-option label="类目二" value="beijing"></el-option>
      <el-option label="类目三" value="beijing"></el-option>
      <el-option label="类目四" value="beijing"></el-option>
      <el-option label="类目五" value="beijing"></el-option>
      <el-option label="类目六" value="beijing"></el-option>
      <el-option label="类目七" value="beijing"></el-option>
      <el-option label="类目八" value="beijing"></el-option>
    </el-select>
  </el-form-item>
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