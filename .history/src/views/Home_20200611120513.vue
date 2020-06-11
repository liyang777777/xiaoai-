<template>
  <div>
    <el-card class="box-card">
      <div class="box1">
        <img src="../assets/log1.png" alt />
        <div class="box2">
          <img src="../assets/log2.png" alt />
        </div>
        <div class="box3">
          <img src="../assets/log3.png" alt />
        </div>
        <div class="box4">
          <img src="../assets/log4.png" alt />
        </div>
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