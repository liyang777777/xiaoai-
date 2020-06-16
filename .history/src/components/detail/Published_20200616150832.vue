<template>
  <!-- 已发布文章 -->
  <!-- 分页表格 -->
  <div class="paging__">
    <!-- 标题 -->
    <el-card class="box-card">
      <el-table
        :data="tableData.slice((currentPage -1)*pageSize,currentPage*pageSize)"
        style="width: 100%"
      >
        <el-table-column label="标题" width="370">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.NAME }}</span>
          </template>
        </el-table-column>
        <!-- 作者 -->
        <el-table-column label="作者" width="150">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.GOODS_SERIAL_NUMBER }}</span>
          </template>
        </el-table-column>
        <!-- 类目 -->
        <el-table-column label="类目" width="100">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ORI_PRICE }}</span>
          </template>
        </el-table-column>
        <!-- 来源 -->
        <el-table-column label="来源" width="100">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.PRESENT_PRICE }}</span>
          </template>
        </el-table-column>
        <!-- 重要性 -->
        <el-table-column label="重要性" width="100">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.PRESENT_PRICE }}</span>
          </template>
        </el-table-column>
        <!-- 发布时间 -->
        <el-table-column label="发布时间" width="100">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.PRESENT_PRICE }}</span>
          </template>
        </el-table-column>
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
      </el-table>
      <!-- 分页功能 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="8"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
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
  width: 300px;
  position: relative;
  left: -420px;
}

.el-pagination {
  width: 100%;
  margin-top: 15px;
}
</style>