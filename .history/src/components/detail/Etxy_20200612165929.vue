<template>
  <div class="conter">
    <div class="box">期待您的下次光临</div>
    <el-button type="text">确定退出</el-button>
  </div>
</template>

<script>
export default {
  name: "Etxy",
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
.conter {
  width: 1200px;
  height: 400px;
  position: relative;
}
.box {
  width: 200px;
  height: 200px;
  font-weight: 100;
  font-size: 18px;
  position: absolute;
 
}
</style>