<template>
  <div>
    <el-card class="cardEight">
      <!-- 图片 -->
      <img
        src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
        alt
        class="img"
      />
      <!-- 进度条 -->
      <div class="vue" v-for="(item,index) in arr" :key="index">
        <div class="name">{{item.name}}</div>
        <el-progress
          :percentage="item.progress * 100"
          class="speed"
          status="success"
          v-if="item.progress === 1"
        ></el-progress>
        <el-progress :percentage="item.progress * 100" class="speed" v-else></el-progress>
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
    return {
      arr: []
    };
  },
  methods: {
    getprogressData() {
      axios
        .get("/api/progress")
        .then(res => {
          console.log(res.data.data);
          this.arr = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getprogressData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 100%;
}
.vue {
  position: relative;
  top: 30px;
  text-align: left;
}
.speed {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
}
 .name {
   font-size: 12px;
 padding-left: 10px;
 }
</style>