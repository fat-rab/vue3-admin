<template>
  <div class="login-container">
    <div class="login-form">
      <div class="login-title">
        系统登陆
      </div>
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginRules"
      >
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" :prefix-icon="User" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" :prefix-icon="Lock" show-password type="password" />
        </el-form-item>
        <el-button
          class="login-btn"
          type="primary"
          :loading="loading"
          @click="login(loginForm.username,loginForm.password)"
        >
          登陆
        </el-button>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import {reactive, ref} from "vue";
import {Lock, User} from '@element-plus/icons-vue'
import {ElForm} from "element-plus";
import {useStore} from "vuex";
import {UserActionEnum} from "@/ts/store/user";
import {useRoute, useRouter} from "vue-router";
import {LoginQuery} from "@/views/login/TS";

export default {
  name: "Login",
  setup() {
    const store = useStore();
    const router = useRouter();

    const loginFormRef = ref<InstanceType<typeof ElForm>>()
    const loading = ref(false)
    const loginForm = reactive({
      username: "admin",
      password: '123456'
    })
    const loginRules = {
      username: [{
        required: true,
        message: '请输入用户名',
        trigger: 'blur',
      }],
      password: [{
        required: true,
        message: "请输入密码",
        trigger: 'blur'
      }]
    }
    let redirect = ''
    const otherQuery = {}

    //获取重定向信息
    function getQuery(query: LoginQuery): void {
      redirect = query.redirect || ''
      Object.keys(query).forEach((key) => {
        if (key !== 'redirect') {
          otherQuery[key] = query[key]
        }
      })
    }

    const route = useRoute()
    getQuery(route.query)
    const login = (username: string, password: string): void => {
      if (!loginFormRef.value) return
      loginFormRef.value.validate((valid: boolean | undefined) => {
            if (valid) {
              loading.value = true
              store.dispatch(`user/${UserActionEnum.LOGIN}`, {username, password}).then(() => {
                loading.value = false
                router.push({
                  path: redirect || "/",
                  query: otherQuery
                })
              })
            }
          }
      )
    }
    return {
      loginForm,
      loginRules,
      User,
      Lock,
      login,
      loginFormRef,
      loading
    }
  },
  watch: {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/login/video-cover.jpeg");
  background-position: center;
  background-size: cover;

  .login-form {
    width: 400px;
    max-width: 100%;
    margin: 0 auto;
    padding-top: 200px;

    .login-title {
      width: 100%;
      text-align: center;
      font-size: 26px;
      color: white;
      font-weight: bolder;
      margin-bottom: 20px;
    }

    .login-btn {
      width: 100%;
    }
  }
}

</style>
