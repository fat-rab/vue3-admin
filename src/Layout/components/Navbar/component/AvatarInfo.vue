<template>
  <div class="avatar-container">
    <img class="user-avatar" :src="userStore.avatar+'?imageView2/1/w/80/h/80'" alt="头像">
    <span class="user-name">{{ userStore.name }}</span>
    <el-dropdown trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        <i-ep-arrow-down class="arrow-down" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="editPassword">
            修改密码
          </el-dropdown-item>
          <el-dropdown-item command="loginOut">
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <!--    <el-dropdown trigger="click" @command="handleCommand">-->
    <!--      <span class="el-dropdown-link">-->
    <!--        <img class="user-avatar" :src="userStore.avatar+'?imageView2/1/w/80/h/80'" alt="头像">-->
    <!--        <span class="user-name">{{ userStore.name }}</span>-->
    <!--        <el-icon class="arrow-down">-->
    <!--          <arrow-down />-->
    <!--        </el-icon>-->
    <!--      </span>-->
    <!--      <template #dropdown>-->
    <!--        <el-dropdown-menu>-->
    <!--          <el-dropdown-item command="editPassword">-->
    <!--            修改密码-->
    <!--          </el-dropdown-item>-->
    <!--          <el-dropdown-item command="loginOut">-->
    <!--            退出登录-->
    <!--          </el-dropdown-item>-->
    <!--        </el-dropdown-menu>-->
    <!--      </template>-->
    <!--    </el-dropdown>-->
  </div>
</template>

<script lang="ts" setup>
import {UserActionEnum} from '@/ts/store/user'
import {useRouter} from 'vue-router'
import {useUserStore} from '@/store/user'
import {saveRedirectRoute} from '@/utils/route'

const router = useRouter()
const userStore = useUserStore()
const handleCommand = (command: string | number | object) => {
  if (command === 'editPassword') {
    //TODO
  }
  if (command === 'loginOut') {
    saveRedirectRoute()
    userStore[UserActionEnum.RESET_TOKEN]()
    router.push({
      path: '/login',
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../styles/variables";

.avatar-container {
  float: right;
  margin-right: 30px;
  display: flex;
  align-items: center;

  .user-avatar {
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    //vertical-align: middle;
  }

  .user-name {
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    line-height: $navbarHeight;
    //vertical-align: middle;
    margin: 0 4px 0 12px;
  }

  .arrow-down {
    font-size: 12px;
    color: #ffffff;
    line-height: $navbarHeight;
    vertical-align: middle;
  }
}

</style>
