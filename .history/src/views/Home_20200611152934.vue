<template>
  <div>
    <el-card class="box-card1">
      <div class="box1">
        <img src="../assets/log1.png" alt class="img1" />
      </div>
      <div class="data">
        <div class="dataName">New Visits</div>
        <div class="dataDa">
          <countTo :startVal="startVal" :endVal="this.visits" :duration="3000"></countTo>
        </div>
      </div>
    </el-card>
    <el-card class="box-card2">
      <div class="box1">
        <img src="../assets/log2.png" alt class="img2" />
      </div>
      <div class="data">
        <div class="dataName">Messages</div>
        <div class="dataDa">
          <countTo :startVal="startVal" :endVal="this.visits" :duration="3000"></countTo>
        </div>
      </div>
    </el-card>
    <el-card class="box-card3">
      <div class="box1">
        <img src="../assets/log3.png" alt class="img3" />
      </div>
      <div class="data">
        <div class="dataName">Purchases</div>
        <div class="dataDa">
          <countTo :startVal="startVal" :endVal="this.visits" :duration="3000"></countTo>
        </div>
      </div>
    </el-card>
    <el-card class="box-card4">
      <div class="box1">
        <img src="../assets/log4.png" alt class="img4" />
      </div>
      <div class="data">
        <div class="dataName">Shopping</div>
        <div class="dataDa">
          <countTo :startVal="startVal" :endVal="this.visits" :duration="3000"></countTo>
        </div>
      </div>
    </el-card>
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
      visits: 0,
      messages: 0,
      purchases: 0,
      shopping: 0,
      startVal: 0,
      endVal: 0
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/homeData")
        .then(res => {
          this.visits = res.data.data.visits;
          this.messages = res.data.data.messages;
          this.purchases = res.data.data.purchases;
          this.shopping = res.data.data.shopping;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  },
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
.btn1 {
  display: flex;
  position: absolute;
  left: 190px;
  top: 0;
}
</style>