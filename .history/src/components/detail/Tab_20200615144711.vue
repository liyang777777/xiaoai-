<template>
  <!-- 标签页 -->
  <div class="conter">
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="未读消息" name="Unread information">未读消息</el-tab-pane>
    <el-tab-pane label="已读消息" name="Read information">已读消息</el-tab-pane>
    <el-tab-pane label="回收站" name="recycle bin">回收站</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import dayJs from 'dayJs'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      activeName: 'second'
      
    };
  },
  methods: {
     handleClick(tab, event) {
        console.log(tab, event);
      }
      
  },

  mounted() {},
  watch: {
    
  },
  computed: {
    
  }
};
</script>

<style scoped lang='scss'>

</style>