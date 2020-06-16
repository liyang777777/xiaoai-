<template>
  <!-- 发表文章 -->
  <div class="content">
    <div class="box">
      <el-row>
        <el-button class="box1">查看</el-button>
        <el-button class="box2">发布</el-button>
      </el-row>
    </div>
    <div class="All">
      <el-form ref="form" :model="sizeForm" :rules="rules" label-width="100px" size="mini">
        <el-form-item label=" 文章标题" prop="title" class="All1">
          <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="文章摘要" prop="abstract" class="All2">
          <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author" class="All3" width="100px">
          <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="类目" prop="Class" class="All4">
          <el-select v-model="sizeForm.region" placeholder="请选择">
            <el-option label="类目一" value="category1"></el-option>
            <el-option label="类目二" value="category2"></el-option>
            <el-option label="类目三" value="category3"></el-option>
            <el-option label="类目四" value="category4"></el-option>
            <el-option label="类目五" value="category5"></el-option>
            <el-option label="类目六" value="category6"></el-option>
            <el-option label="类目七" value="category7"></el-option>
            <el-option label="类目八" value="category8"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="来源" prop="source" class="All5">
          <el-select v-model="sizeForm.region" placeholder="请选择">
            <el-option label="来源一" value="source1"></el-option>
            <el-option label="来源二" value="source2"></el-option>
            <el-option label="来源三" value="source3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="重要性" prop="importance" class="All6">
          <el-select v-model="sizeForm.region" placeholder="请选择">
            <el-option label="重要性一" value="star1"></el-option>
            <el-option label="重要性二" value="star2"></el-option>
            <el-option label="重要性三" value="star3"></el-option>
            <el-option label="重要性四" value="star4"></el-option>
            <el-option label="重要性五" value="star5"></el-option>
          </el-select>
        </el-form-item>
        <div class="bolck">
          <span class="demonstration">发布时间</span>
          <el-date-picker
            v-model="value2"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>
        <div id="main" class="max">
          <mavon-editor v-model="value" />
        </div>
        <el-row>
          <el-button class="box3">发布</el-button>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Parr",
  props: {},
  components: {},
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请选择"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      sizeForm: {},
      name: "",
      value: "",
      value2: "",
      ruleForm: {
        name: "",
        pass: ""
      },
      rules: {
        title: [
          { required: true, message: "请输入文章标题", trigger: "blur" },
          { min: 0, max: 35, message: "长度在 0 到 35 个字符", trigger: "blur" }
        ],
        abstract: [
          { required: true, message: "请输入文章摘要", trigger: "blur" },
          { min: 0, max: 35, message: "长度在 0 到 35 个字符", trigger: "blur" }
        ],
        author: [
          { required: true, message: "请输入作者", trigger: "blur" },
          { min: 1, max: 8, message: "长度在 1 到 8 个字符", trigger: "blur" }
        ],
        Class: [{ required: true, message: "请选择类目", trigger: "change" }],
        source: [{ required: true, message: "请输入来源", trigger: "change" }],
        importance: [
          { required: true, message: "请输入星数", trigger: "change" }
        ]
      },
      pickerOptions: {
        shortcuts: [
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          }
        ]
      }
    };
  },
  methods: {
    Parr() {
      if (this.ruleForm.pass === "" || this.ruleForm.name === "") {
        this.$message({
          message: "内容不能为空",
          type: "warning"
        });
        return;
      }
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          axios
            .post("/api/article/create", {
              title: this.ruleForm.name,
              abstract: this.ruleForm.pass
            })
            .then(res => {
              if (res.data.code === 200) {
                this.$router.push("/Published");
                this.$message({
                  showClose: true,
                  message: "恭喜你，发布成功",
                  type: "success"
                });
              } else {
                this.$message.error(res.data.message);
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.$message.error("表单验证错误,请检查");
          return;
        }
      });
    },
    goToIn() {
      this.$router.push("/Published");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  height: 50px;
  background-color: rgb(89, 165, 134);
}
.box1 {
  width: 60px;
  height: 50px;
  justify-content: center;
  display: flex;
  margin-top: 0;
  margin-left: 950px;
  background: rgb(245, 108, 108);
}
.box2 {
  width: 60px;
  height: 50px;
  justify-content: center;
  display: flex;
  margin-top: -50px;
  margin-left: 1035px;
  background: rgb(64, 158, 255);
}
.box3 {
  background: rgb(64, 158, 255);
}
.All {
  margin-top: 50px;
}
.All3 {
  width: 250px;
  margin-left: 0px;
}
.All4 {
  width: 250px;
  margin-left: 120px;
  margin-top: -47px;
}
.All5 {
  width: 250px;
  margin-left: 300px;
  margin-top: -47px;
}
.All6 {
  width: 250px;
  margin-left: 600px;
  margin-top: -47px;
}
.bolck {
  width: 400px;
  height: 40px;
 margin-left: 856px;
  margin-top: -60px;
  line-height: 4;
  display: flex;
}
.max {
  margin-top: 30px;
}
</style>