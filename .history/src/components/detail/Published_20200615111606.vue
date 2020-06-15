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
   <el-form-item label="来源">
    <el-select v-model="sizeForm.region" placeholder="请选择">
      <el-option label="来源一" value="shanghai"></el-option>
      <el-option label="来源二" value="beijing"></el-option>
       <el-option label="来源三" value="beijing"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="重要性">
    <el-select v-model="sizeForm.region" placeholder="请选择">
      <el-option label="重要一" value="shanghai"></el-option>
      <el-option label="重要二" value="beijing"></el-option>
       <el-option label="重要三" value="beijing"></el-option>
        <el-option label="重要四" value="beijing"></el-option>
         <el-option label="重要五" value="beijing"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="活动时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <div id="main">
    <mavon-editor v-model="value"/>
    <el-main class="content-content">
     <mavon-editor 
     v-model = 'editorContent'
     :ishljs="true"
      :codeStyle="code_style"
     ref=md @imgAdd="$imgAdd" @imgDel="$imgDel"
      />
 </el-main>
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
  width: 100%;
  height: 50px;
  background-color: rgb(89,165,134);
}
</style>