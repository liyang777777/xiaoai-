<template>
  <div>
    <div class="btn">
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
          <countTo :startVal="startVal" :endVal="this.messages" :duration="3000"></countTo>
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
          <countTo :startVal="startVal" :endVal="this.purchases" :duration="3000"></countTo>
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
          <countTo :startVal="startVal" :endVal="this.shopping" :duration="3000"></countTo>
        </div>
      </div>
    </el-card>
    </div>

    <Home2></Home2>
    <Home3></Home3>
    <Home4></Home4>
    <Home5></Home5>
    <Home6></Home6>
    <Home7></Home7>
    <Home8></Home8>
  </div>
</template>

<script>
import countTo from "vue-count-to";
import axios from "axios";
import Home2 from "../components/detail/Home2";
import Home3 from "../components/detail/Home3";
import Home4 from "../components/detail/Home4";
import Home5 from "../components/detail/Home5";
import Home6 from "../components/detail/Home6";
import Home7 from "../components/detail/Home7";
import Home8 from "../components/detail/Home8";
export default {
  name: "",
  props: {},
  components: {
    countTo,
    Home2,
    Home3,
    Home4,
    Home5,
    Home6,
    Home7,
    Home8
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
.btn {
  display: flex;
  position: relative;
}
.box-card1 {
 
}
</style>