<template>
  <div>
    <el-card class="box-card1">
      <div class="box1">
        <img src="../assets/log1.png" alt class="img1" />
      </div>
    </el-card>
    <el-card class="box-card2">
      <div class="box1">
        <img src="../assets/log2.png" alt class="img2" />
      </div>
    </el-card>
    <el-card class="box-card3">
      <div class="box1">
        <img src="../assets/log3.png" alt class="img3" />
      </div>
    </el-card>
    <el-card class="box-card4">
      <div class="box1">
        <img src="../assets/log4.png" alt class="img4" />
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
.box-card1 {
  width: 250px;
  height: 100px;
  display: flex;
  position: absolute;
  left: 180px;
}
.box-card2 {
  width: 250px;
  height: 100px;
  display: flex;
  position: absolute;
  left: 220px;
}
.box-card3 {
  width: 250px;
  height: 100px;
  display: flex;
  position: absolute;
  left: 700px;
}
.box-card4 {
  width: 250px;
  height: 100px;
  display: flex;
  position: absolute;
  left: 1100px;
}
</style>