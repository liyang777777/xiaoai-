<template>
  <div>
    <el-card class="cardEight">
      <div>
        <img src="../../assets/风景图.png" alt class="img" />
        <div v-for="(item,index) in arr" :key="index"></div>
        <el-progress
          :percentage="item * 100"
          class="spead"
          status="success"
          v-if="item.percentage === 1"
        ></el-progress>
        <el-progress v-else></el-progress>
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
    return {};
  },
  methods: {
    getprogress() {
      axios.get('/api/progress').then(res => {
        console.log(res);
      })
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>