<template>
  <div>
    <div class="lbw">
      <el-tabs type="border-card">
        <el-tab-pane :label="one">
          <div v-for="(item, index) in arr" :key="index">
            <div class="mmm w-1 dis-1 al-1 po-1">
              <div class="fz-16">{{ item.name }}</div>
              <div class="hn2 po-2 fz-16">{{ item.time }}</div>
              <div class="btn po-2"><el-button @click="qqq(item,index)">标记已读</el-button></div>
            </div>
          </div>
          <div class="dvc"><el-button type="primary" @click="www">全部标记为已读</el-button></div>
        </el-tab-pane>
        <el-tab-pane :label="two">
          <div v-for="(item,index) in ass" :key="index">
           <div class="lll dis-1 al-1 po-1">
             <div class="fz-16">{{item.name}}</div>
             <div class="hn2 po-2 fz-16">{{item.time}}</div>
             <div class="btn po-2">  <el-button @click="eee(item,inex)">删除</el-button></div>
           </div>
          </div>
          <div class="dvc"><el-button type="danger" @click="rrr">全部删除</el-button></div>
        </el-tab-pane>
        <el-tab-pane :label="therr">
           <div v-for="(item,index) in asr" :key="index">
             <div class="lll dis-1 al-1 po-1">
             <div class="fz-16">{{item.name}}</div>
             <div class="hn2 po-2 fz-16">{{item.time}}</div>
             <div class="btn po-2"><el-button type="warning" @click="ttt(item,inex)">还原</el-button></div>
             </div>
           </div>
           <div class="dvc"><el-button type="info" @click="yyy">清空回收站</el-button></div>
        </el-tab-pane>
        
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      activeName: "second",
      arr: [
        {
          name: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2020-6-12 9:03",
        },
        {
          name: "今晚12点整发大红包,先到先得",
          time: "2020-6-12 9:03",
        },
      ],
      ass: [
        {
          name: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2020-6-12 9:03",
        },
      ],
      asr: [
        {
          name: "[系统通知]您的优惠券已经过期",
          time: "2018-6-12 9:03",
        },
      ],
    };
  },
  methods: {
   qqq(item,index){
     this.arr.splice(index, 1),
     this.ass.push(item)
   },
   eee(item,index){
     this.ass.splice(index, 1)
     this.asr.push(item)
   },
   ttt(item,index){
     this.asr.splice(index, 1)
     this.arr.push(item)
   },
   www(){
     this.ass = this.ass.concat(this.arr)
     this.arr = []
   },
   rrr(){
     this.asr = this.asr.concat(this.ass)
     this.ass = []
   },
   yyy(){
     this.asr = [] 
   }
   },
  mounted() {},
  watch: {},
  computed: {
    one(){
      return '未读消息'+ "( " + this.arr.length + ")";
    },
    two(){
      return '已读消息'+ "( " + this.ass.length + ")";
    },
    therr(){
      return '回收站'+ "( " + this.asr.length + ")";
    }
  },
};
</script>

<style scoped lang="scss">
.lbw {
  width: 100%;
  height: 781px;
  padding-top: 50px;
}
.mmm {
  height: 60px;
  border-bottom: 1px solid #ccc;
}
// .hn2 {
//   right: 150px;
// }
// .btn {
//   right: 40px;
// }
// .dvc {
//   text-align: left;
//   display: flex;
//   align-items: center;
//   margin-top: 20px;
// }
// .lll{
//   height: 80px;
//   border-bottom: 1px solid #ccc;
//   text-align: left;
// }
.fz-16 {
  font-weight: 800;
  display: flex;
  margin-left: 30px;
}

</style>
