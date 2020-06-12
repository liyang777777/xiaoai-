<template>
  <div>
    <el-card class="cardSix">
      <el-table :data="orderData" style="width: 100%">
        <el-table-column prop="num" label="订单号" width="180"></el-table-column>
        <el-table-column prop="price" label="价格" width="180"></el-table-column>
        <el-table-column prop="status" label="地位"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      orderData: [],
      
    };
  },
  methods: {
    getorderData() {
      axios
        .get("/api/orderData")
        .then(res => {
          // console.log(res.data.data);
          this.orderData = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getorderData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.cardSix {
  width: 500px;
  height: 810px;
  position: relative;
  top: -600px;
}
</style>