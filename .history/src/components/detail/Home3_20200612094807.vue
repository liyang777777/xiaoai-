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
import axios from "axios";
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
  methods: {
    getradarChat() {
      axios
        .get("/api/radarChat")
        .then(res => {
          // console.log(res);
          this.radarChat.rows = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getradarChat();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.cardThree {
  width: 1137px;
  height: 437px;
  position: relative;
  top: 30px;
}
</style>