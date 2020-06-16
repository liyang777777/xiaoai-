<template>
  <!-- 发表文章 -->
  <div class="content">
    <div class="box">
      <el-row>
        <el-button class="box1" @click="getParr">查看</el-button>
        <el-button class="box2" @click="getParr">发布</el-button>
      </el-row>
    </div>
    <div class="All">
      <el-form ref="form" :model="sizeForm" :rules="rules" label-width="100px" size="mini">
        <el-form-item label=" 文章标题" prop="title" class="All1">
          <el-input v-model="sizeForm.title"></el-input>
        </el-form-item>
        <el-form-item label="文章摘要" prop="abstract" class="All2">
          <el-input v-model="sizeForm.abstract"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author" class="All3" width="100px">
          <el-input v-model="sizeForm.author"></el-input>
        </el-form-item>
        <el-form-item label="类目" prop="category" class="All4">
          <el-select v-model="sizeForm.category" placeholder="请选择">
            <el-option label="Vue" value="category1"></el-option>
            <el-option label="React" value="category2"></el-option>
            <el-option label="Node.js" value="category3"></el-option>
            <el-option label="性能优化" value="category4"></el-option>
            <el-option label="JavaScript" value="category5"></el-option>
            <el-option label="小程序" value="category6"></el-option>
            <el-option label="工具类" value="category7"></el-option>
            <el-option label="其他" value="category8"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="来源" prop="source" class="All5">
          <el-select v-model="sizeForm.source" placeholder="请选择">
            <el-option label="原创" value="source1"></el-option>
            <el-option label="转载" value="source2"></el-option>
            <el-option label="与他人合作" value="source3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="重要性" prop="star" class="All6">
          <el-select v-model="sizeForm.star" placeholder="请选择">
            <el-option label="1" value="star1"></el-option>
            <el-option label="2" value="star2"></el-option>
            <el-option label="3" value="star3"></el-option>
            <el-option label="4" value="star4"></el-option>
            <el-option label="5" value="star5"></el-option>
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
          <el-button class="box3" @click="getParr">发布</el-button>
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
    return {
      value: "",
      value2: "",
      sizeForm: {
        title: "",
        abstract: "",
        author: "",
        category: "",
        star: "",
        source: ""
      },
      text: "",
      date: "",
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
        category: [
          { required: true, message: "请选择类目", trigger: "change" }
        ],
        source: [{ required: true, message: "请选择来源", trigger: "change" }],
        star: [{ required: true, message: "请选择星数", trigger: "change" }]
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
    getParr() {
      axios
        .post("/api/article/create", {
          title: this.sizeForm.title,
          abstract: this.sizeForm.abstract,
          author: this.sizeForm.author,
          category: this.sizeForm.category,
          source: this.sizeForm.source,
          star: this.sizeForm.star,
          text: this.text,
          date: this.date
        })
        .then(res => {
          if (res.data.code === 200) {
            this.$message({
              message: res.data.data,
              type: "success"
            });
            this.$router.push("/Published");
          } else {
            this.$message.error("不好意思,您的文章发布失败,请重新发布");
          }
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getParr();
  },
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
  width: 220px;
  margin-left: 0px;
}
.All4 {
  width: 220px;
  margin-left: 200px;
  margin-top: -47px;
}
.All5 {
  width: 220px;
  margin-left: 400px;
  margin-top: -47px;
}
.All6 {
  width: 220px;
  margin-left: 620px;
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