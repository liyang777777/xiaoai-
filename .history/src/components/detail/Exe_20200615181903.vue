<template>
  <!-- 导出Excel -->
  <div class="content">
    <div>
      <el-input v-model="input" placeholder="请输入您想搜索的商品名称" class="box"></el-input>
    </div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="NAME" label="名称" width="180"></el-table-column>
        <el-table-column prop="SHOP_ID" label="商品编号" width="180"></el-table-column>
        <el-table-column prop="ORI_PRICE" label="原价"></el-table-column>
        <el-table-column prop="PRESENT_PRICE" label="现价"></el-table-column>
        <el-table-column prop="operation" label="操作">
          <el-button type="primary" icon="el-icon-edit" @click="edit">修改</el-button>
          <el-button type="primary" icon="el-icon-delete" @click="del">删除</el-button>
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
    <download-excel
      class="export-excel-wrapper"
      :data="json_data"
      :fields="json_fields"
      name="filename.xls"
    >
      <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
      <!-- <el-button type="primary" size="small">导出EXCEL</el-button> -->
    </download-excel>
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
      handleCurrentChange: "",
      tableData: [],
      json_fields: {
        "Complete name": "name", //常规字段
        Telephone: "phone.mobile", //支持嵌套属性
        "Telephone 2": {
          field: "phone.landline",
          //自定义回调函数
          callback: value => {
            return `Landline Phone - ${value}`;
          }
        }
      },
      json_data: [
        {
          name: "Tony Peña",
          city: "New York",
          country: "United States",
          birthdate: "1978-03-15",
          phone: {
            mobile: "1-541-754-3010",
            landline: "(541) 754-3010"
          }
        },
        {
          name: "Thessaloniki",
          city: "Athens",
          country: "Greece",
          birthdate: "1987-11-23",
          phone: {
            mobile: "+1 855 275 5071",
            landline: "(2741) 2621-244"
          }
        }
      ],
      json_meta: [
        [
          {
            " key ": " charset ",
            " value ": " utf- 8 "
          }
        ]
      ]
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/tableData")
        .then(res => {
          // console.log(res.data.data);
          this.tableData = res.data.data;
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