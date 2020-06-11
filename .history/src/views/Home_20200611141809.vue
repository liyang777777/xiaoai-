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
    <div class="btn">
      <countTo :startVal="startVal" :endVal="endVal" :duration="3000"></countTo>
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {
    countTo
  },
  data() {
    return {
      startVal: 0,
      endVal: 2017
    };
  },
  methods: {
    countTo() {
      axios.get(`http://localhost:3000/homeData`).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box-card1 {
  width: 280px;
  height: 100px;
  display: flex;
  position: absolute;
  left: 180px;
}
.box-card2 {
  width: 280px;
  height: 100px;
  display: flex;
  position: absolute;
  left: 470px;
}
.box-card3 {
  width: 280px;
  height: 100px;
  display: flex;
  position: absolute;
  left: 760px;
}
.box-card4 {
  width: 280px;
  height: 100px;
  display: flex;
  position: absolute;
  left: 1050px;
}
.box1 {
  display: flex;
  position: absolute;
  top: 30px;
  left: 20px;
}
.btn {
  display: flex;
  position: absolute;
  left: 40px;
  top: 0;
}
</style>