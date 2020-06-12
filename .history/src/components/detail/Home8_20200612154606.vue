<template>
 <div>
<el-card class="jindu">
      <!-- 图片 -->
      <img
        src="../../assets/风景图.png"
        alt
        class="img"
      />
      <!-- 进度条 -->
      <div class="vue" v-for="(item,index) in list" :key="index">
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
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
 list: []
     }
   },
   methods: {
 getDataprogress() {
      axios
        .get("/api/progress")
        .then(res => {
          this.list = res.data.data;
          console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
   },
   mounted() {
 this.getDataprogress();
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.jindu {
    width: 500px;
    height: 812px;
    position: relative;
    top: -1510px;
    left: 500px;
}
.img {
  width: 290px;
  height: 180px;
}
.vue {
    
  position: absolute;
  top: 10px;
  text-align: left;
}

</style>
