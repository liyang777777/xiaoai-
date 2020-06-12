<template>
  <div>
    <el-card class="cardSix">
      <el-table :data="orderData" style="width: 100%">
        <el-table-column prop="num" label="订单号" width="180"></el-table-column>
        <el-table-column prop="Price" label="价格" width="180"></el-table-column>
        <el-table-column prop="Status" label="地位"></el-table-column>
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
      rows: [
        
      ]
    };
  },
  methods: {
    getorderData() {
      axios
        .get("/api/orderData")
        .then(res => {
          console.log(res);
          this.orderData.rows = res.data.data;
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
</style>