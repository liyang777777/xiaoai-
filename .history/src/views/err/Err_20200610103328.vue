<template>
  <div>
    <div>
      <img src="../../assets/010c4d57cf7a180000012e7e81d4f3.jpg" alt class="img" />
    </div>
    
    <el-button type="success" round class="btn" @click="btn">返回首页</el-button>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    btn() {
      this.$router.push("/");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  margin-left: 100px;
  margin-top: 100px;
}
</style>