<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="Order_No" label="订单号" width="180"></el-table-column>
      <el-table-column prop="Price" label="价格" width="180"></el-table-column>
      <el-table-column prop="Status" label="地位"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      tableData: [],
      Order_No: '',
      Price: '',
      Status: ''
    };
  },
  methods: {
    getorderData() {
      axios.get('/api/orderData').then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    this.orderData()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>