<template>
<!-- 雷达图 -->
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
   this.chartSetradar = {
      labelMap: {
        // '日期': 'date',
        // '访问用户': 'PV',
        // '下单用户': 'Order',
        // '下单率': 'orderRate'
      }
    };
    return {
       radarChat: {
        columns: [
          "name",
          "ministration",
          "sales",
          "techology",
          "delelopmer",
          "marketing"
        ],
        rows: []
      },
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
  width: 420px;
  height: 350px;
  position: relative;
  top: 70px;
  left: 5px;
}
</style>