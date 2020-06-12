<template>
  <div>
    <el-card class="cardFive">
      <ve-histogram :data="homeChatt" :settings="chartSetdata"></ve-histogram>
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
    this.chartSetdata = {
      metrics: ["expected", "actual"],
      dimension: ["date"]
    };
    return {
      homeChatt: {
        columns: ["date", "expected", "actual"],
        rows: []
      }
    };
  },
  methods: {
    getdataChat() {
      axios
        .get("/api/homeChat")
        .then(res => {
          this.homeChatt.rows = res.data.data;
          // console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getdataChat();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.cardFive {
  width: 420px;
  height: 400px;
  position: relative;
  top: -280px;
  left: 430px;
}
</style>