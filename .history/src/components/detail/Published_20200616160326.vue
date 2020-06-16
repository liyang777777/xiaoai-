<template>
  <!-- 已发布文章 -->
  <!-- 分页表格 -->
  <div class="paging__">
    <!-- 标题 -->
    <el-card class="box-card">
      <el-table :data="tableData" border style="width: 100%">
        <div class="box1">
          <el-table-column prop="title" label="标题" width="100"></el-table-column>
        </div>
        <!-- 作者 -->
        <div class="box2">
          <el-table-column prop="author" label="作者" width="100"></el-table-column>
        </div>

        <!-- 类目 -->
        <div class="box3">
          <el-table-column prop="Class" label="类目" width="100"></el-table-column>
        </div>

        <!-- 来源 -->
        <div class="box4">
          <el-table-column prop="source" label="来源" width="100"></el-table-column>
        </div>

        <!-- 重要性 -->
        <div class="box5">
          <el-table-column prop="importance" label="重要性" width="100"></el-table-column>
        </div>

        <!-- 发布时间 -->
        <div class="box6">
          <el-table-column prop="date" label="发布时间" width="100"></el-table-column>
        </div>
        <div class="box7">
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="handleEdit(scope.row)">
                <i class="el-icon-edit"></i> 编辑
              </el-button>

              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
                <i class="el-icon-delete"></i> 删除
              </el-button>

              <el-button size="mini" type="danger" @click="handleSee(scope.$index, scope.row)">
                <i class="el-icon-delete"></i> 查看
              </el-button>
            </template>
          </el-table-column>
        </div>
      </el-table>
      <!-- 分页功能 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="8"
      ></el-pagination>
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
      input: "",
      tableData: [],
      currentPage: 1,
      pageSize: 10,
      // dialogTableVisible: false,
      dialogFormVisible: false,
      obj: {},
      formLabelWidth: "180px"
    };
  },
  methods: {
    // 商品数据
    gettableData() {
      axios
        .get("/api/tableData")
        .then(res => {
          this.tableData = res.data.data;
          // console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // handleEdit(index, row) {
    //   console.log(index, row);
    // },
    change(row) {
      this.dialogFormVisible = true;
      this.obj = row;
    },
    handleDelete(index, row) {
      this.tableData.splice(index, 1);
      // console.log(index, row);
    },
    handleSizeChange(val) {
      this.pageSize = val;
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      // console.log(`当前页: ${val}`);
    }
  },
  mounted() {
    this.gettableData();
  },
  watch: {
    input(val) {
      axios
        .get("/api/tableData")
        .then(res => {
          this.tableData = res.data.data.filter(item => {
            return JSON.stringify(item).indexOf(val) !== -1;
          });
          // console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {}
};
</script>
<style scoped lang='scss'>
.paging__ {
  width: 100%;
}
.el-input {
  width: 200px;
  position: relative;
  left: -420px;
}

.el-pagination {
  width: 100%;
  margin-top: 15px;
}
</style>