<template>
  <div>
    <div class="conter">
      <div class="box">
        <img class="img" src="../../assets/afc80a0e2c0a4b19b290f01162add18b.gif" alt="背景图" />
      </div>
      <div>
        <el-form ref="from" :model="from" :rules="rules" label-width="80px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="from.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="username">
            <el-input v-model="from.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="register">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template> 

<script>
import axios from 'axios'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{required: true, message: '用户名不能为空',trigger: 'blur'}],
        password: [{required: true, message: '密码不能为空',trigger: 'blur'}],
      }
    }
  },
  methods: {
    register() {
      this.$refs.from.validate(valid => {
        if(valid) {
          axios.post('/api/user/register', {
            username: this.from.username,
            password: this.from.password,
          }).then(res => {
            console.log(res.data);
          }).catch(err => {
            console.log(err);
          })
        }else {
          this.$message.error('表单验证错误,请检查')
          return
        }
      })
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>