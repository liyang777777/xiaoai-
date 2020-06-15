<template>
  <!-- 发表文章 -->
  <div class="content">
    <div class="box">
      <el-row>
        <el-button @click="btn1" class="box1">查看</el-button>
        <el-button @click="btn2" class="box2">发布</el-button>
      </el-row>
    </div>
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
      <el-form-item label=" title">
        <el-input v-model="sizeForm.name"></el-input>
      </el-form-item>
      <el-form-item label="abstract">
        <el-input v-model="sizeForm.name"></el-input>
      </el-form-item>
      <el-form-item label="author">
        <el-input v-model="sizeForm.name"></el-input>
      </el-form-item>
      <el-form-item label="category">
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
      <el-form-item label="source">
        <el-select v-model="sizeForm.region" placeholder="请选择">
          <el-option label="来源一" value="source1"></el-option>
          <el-option label="来源二" value="source2"></el-option>
          <el-option label="来源三" value="source3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="star">
        <el-select v-model="sizeForm.region" placeholder="请选择">
          <el-option label="重要一" value="star1"></el-option>
          <el-option label="重要二" value="star2"></el-option>
          <el-option label="重要三" value="star3"></el-option>
          <el-option label="重要四" value="star4"></el-option>
          <el-option label="重要五" value="star5"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="date">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="sizeForm.date1"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <div id="main">
        <mavon-editor v-model="value" />
        <el-main class="content-content">
          <mavon-editor
            v-model="editorContent"
            :ishljs="true"
            :codeStyle="code_style"
            ref="md"
            @imgAdd="$imgAdd"
            @imgDel="$imgDel"
          />
        </el-main>
      </div>
    </el-form>
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
        ruleForm: {
            name: "",
            pass: ""
        },
       
    };
  },
  methods: {
Parr() {
    if(this.ruleForm.pass === "" || this.ruleForm.name === "") {
this.$message({
    message: "内容不能为空",
    type: "warning"
})
return
    }
    this.$refs.ruleForm.validate(valid => {
        if(valid) {
            axios.post("api/user/register", {
title: this.ruleForm.name,
abstract: this.ruleForm.pass
            }).then(res => {
                if(res.data.code === 200) {
                    this.$router.push("/Published")
                    this.$message({
                        showClose: true,
                        message: "恭喜你，发布成功",
                        type: "success"
                    }) 
                
                }else {
                    this.$message.error(res.data.message)
                }
            }).catch(err => {
                console.log(err);
            })
        }else {
            this.$message.error("表单验证错误,请检查")
            return
        }
    })
},
goToIn() {
    this.$router.push("/Published")
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
</style>