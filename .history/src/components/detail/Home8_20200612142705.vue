<template>
  <div>
    <el-card class="cardEight">
      <div>
        <img src="../../assets/风景图.png" alt class="img">
        <el-progress :percentage="70" :format="vue"></el-progress>
        <el-progress :percentage="100" :format="html"></el-progress>
        <el-progress :percentage="54" :format="css"></el-progress>
        <el-progress :percentage="70" :format="javascript"></el-progress>
      </div>
    </el-card>
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