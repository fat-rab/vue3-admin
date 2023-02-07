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
          <el-input v-model="loginForm.username">
            <template #prefix>
              <i-ep-user />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" show-password type="password">
            <template #prefix>
              <i-ep-lock />
            </template>
          </el-input>
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
import {reactive, ref} from 'vue'
import {ElForm} from 'element-plus'
import {UserActionEnum} from '@/ts/store/user'
import {useRouter} from 'vue-router'
import {useUserStore} from '@/store/user'

export default {
  name: 'Login',
  setup() {
    const userStore = useUserStore()
    const router = useRouter()

    const loginFormRef = ref<InstanceType<typeof ElForm>>()
    const loading = ref(false)
    const loginForm = reactive({
      username: 'admin',
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
        message: '请输入密码',
        trigger: 'blur'
      }]
    }

    const login = (username: string, password: string): void => {
      if (!loginFormRef.value) return
      loginFormRef.value.validate((valid: boolean | undefined) => {
            if (valid) {
              loading.value = true
              userStore[UserActionEnum.LOGIN]({username, password}).then(() => {
                loading.value = false
                router.push({
                  path: '/'
                })
              })
            }
          }
      )
    }

    return {
      loginForm,
      loginRules,
      login,
      loginFormRef,
      loading
    }
  }
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
