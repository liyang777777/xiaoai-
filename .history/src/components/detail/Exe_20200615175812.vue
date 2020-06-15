<template>
  <!-- 导出Excel -->
  <div class="content">
    <div>
      <el-input v-model="input" placeholder="请输入您想搜索的商品名称" class="box"></el-input>
    </div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="名称" width="180"></el-table-column>
        <el-table-column prop="Item No" label="商品编号" width="180"></el-table-column>
        <el-table-column prop="original price" label="原价"></el-table-column>
        <el-table-column prop="present price" label="现价"></el-table-column>
        <el-table-column prop="operation" label="操作">
          <el-button type="primary" icon="el-icon-edit"></el-button>
          <el-button type="primary" icon="el-icon-delete"></el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="694"
      ></el-pagination>
    </div>
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
      input: "",
      currentPage4: 1,
      handleSizeChange: "",
      handleCurrentChange: '',
      
      tableData: []
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/tableData")
        .then(res => {
          console.log(res);
          this.tableData = res.data.datas
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 200px;
  height: 50px;
  display: flex;
}
</style>