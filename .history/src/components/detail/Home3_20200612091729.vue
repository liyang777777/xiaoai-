<template>
  <div>
    <el-card class="cardThree">
      <div class="box">
        <ve-radar :data="chartData"></ve-radar>
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
    this.chartSettings = {
      dimension: ["date"],
      metrics: ["Access users", "Order user", "Order rate"],
      dataType: { "Order rate": "percent" }
    };
    return {
      chartData: {
        columns: ["date", "Access users", "Order user", "Order rate"],
        rows: []
      }
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>