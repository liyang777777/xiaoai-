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
import axios from 'axios'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      arr: []
    };
  },
  methods: {
    getprogress() {
      axios.get('/api/progress').then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    this.getprogress()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>