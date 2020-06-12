<template>
 <div>
<el-card class="cardEight">
  <div>
    <img src="../../assets/风景图.png" alt="">
    
<el-progress :percentage="70" :format="format"></el-progress>
<el-progress :percentage="100" status="success"></el-progress>
<el-progress :percentage="54" status="warning"></el-progress>
<el-progress :percentage="70" status="exception"></el-progress>
  </div>
</el-card>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>