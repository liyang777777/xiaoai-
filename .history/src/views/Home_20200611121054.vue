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
.box-card {
  width: 300px;
  height: 100px;
  display: flex;
  position: relative;
}

.box1 {
  width: 50px;
  height: 200px;
  position: absolute;
  top: 100px;
  left: 100px;
}
// .box2 {
//   padding: 18px 0;
// }
// .box3 {
//   padding: 18px 0;
// }
// .box4 {
//   padding: 18px 0;
// }
</style>