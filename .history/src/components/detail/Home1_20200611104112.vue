<template>
  <div>
    <el-card class="box-card">
      <div v-for="o in 4" :key="o" class="text item">{{'item ' + o }}</div>
      <div>
        <img src="../../assets/log1.png" alt />
        <img src="../../assets/log2.png" alt />
        <img src="../../assets/log3.png" alt />
        <img src="../../assets/log4.png" alt />
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
    return {
      
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>