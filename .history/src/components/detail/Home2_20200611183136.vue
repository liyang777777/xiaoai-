<template>
  <div>
    <el-card class="cardTwo">
      <div class="box">
        <ve-line :data="homeChat" :settings="chartSethome"></ve-line>
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
    this.chartSethome = {
      metrics: ["expected", "actual"],
      dimension: ["date"]
    };
    return {
      homeChat: {
        columns: ["date", "expected", "actual"],
        rows: []
      }
    };
  },
  methods: {
    gethomeChat() {
      axios
        .get("/api/homeChat")
        .then(res => {
          this.homeChat.rows = res.data.data;
          // console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.gethomeChat();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.cardTwo {
  width: 1137px;
  height: 370px;
  display: flex;
  position: relative;
  top: 40px;
  left: 15px;
}
.box {
  width: 1000px;
  height: 350px;
  display: flex;

}
</style>