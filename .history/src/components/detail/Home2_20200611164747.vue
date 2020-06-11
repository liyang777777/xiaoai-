<template>
  <div>
    <el-card class="cardTwo">
      <ve-line :data="homeChat" :settings="chartSethome"></ve-line>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'
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
  width: 100px;
  height: 100px;
}
</style>