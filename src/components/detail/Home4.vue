<template>
  <!-- 饼图 -->
  <div>
    <el-card class="cardFour">
      <div class="box">
        <ve-pie :data="ringChat" :settings="chartSettings"></ve-pie>
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
      roseType: "radius"
    };
    return {
      ringChat: {
        columns: ["name", "data"],
        rows: []
      }
    };
  },
  methods: {
    getringChat() {
      axios
        .get("/api/ringChat")
        .then(res => {
          // console.log(res);
          this.ringChat.rows = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getringChat();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.cardFour {
  width: 400px;
  height: 400px;
  position: relative;
  top: -330px;
  left: 450px;
}
</style>