<template>
<!-- 饼图 -->
  <div>
    <el-card class="cardFour">
      <div class="box">
        <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
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
      dimension: "date",
      metrics: "Access users"
    };
    return {
      chartData: {
        columns: ["date", "Access users"],
        rows: []
      }
    };
  },
  methods: {
    getringChat() {
      axios.get('/api/ringChat').then(res => {
        // console.log(res);
        this.chartData = res.data.data
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    this.getringChat()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.cardFour {
  width: 420px;
  height: 350px;
  position: relative;
  top: -277px;
  left: 450px;
}
</style>