<template>
  <div>
    <el-card class="cardEight">
      <div>
        <img src="../../assets/风景图.png" alt class="img" />
        <div v-for="(item,index) in arr" :key="index">{{item.name}}</div>
        <el-progress
          :percentage="item.progress * 100"
          class="spead"
          status="success"
          v-if="item.progress === 1"
        ></el-progress>
        <el-progress v-else>暂无数据</el-progress>
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
        console.log(res.data.data);
        this.arr = res.data.data
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