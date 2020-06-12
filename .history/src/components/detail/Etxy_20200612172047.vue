<template>
  <div class="conter">
    <div class="box">期待您的下次光临</div>
    <el-button type="text" class="btn" @click="code">确定退出</el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Etxy",
  props: {},
  components: {},
  data() {
    return {
      code: ''
    };
  },
  methods: {
    getCode() {
      axios
        .get("/api/user/logout")
        .then(res => {
          // console.log(res);
          this.getData = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getCode();
  },
  watch: {},
  computed: {}
};
</script>
 
<style scoped lang='scss'>
.box {
  width: 100%;
  height: 200px;
  font-weight: 900;
  font-size: 18px;
  display: flex;
  justify-content: center;
}
.btn {
  width: 100%;
  height: 200px;
  display: flex;
  font-size: 18px;
  font-weight: 800;
  justify-content: center;
  margin-top: -170px;
}
</style>