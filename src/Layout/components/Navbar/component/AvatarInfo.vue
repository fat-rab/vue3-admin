<template>
  <div class="avatar-container">
    <el-dropdown trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        <img class="user-avatar" :src="userStore.avatar+'?imageView2/1/w/80/h/80'" alt="头像">
        <span class="user-name">{{ userStore.name }}</span>
        <el-icon class="arrow-down">
          <arrow-down />
        </el-icon>
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
  </div>
</template>

<script lang="ts" setup>
import {UserActionEnum} from '@/ts/store/user'
import {useRoute, useRouter} from 'vue-router'
import {useUserStore} from '@/store/user'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const handleCommand = (command: string | number | object) => {
  if (command === 'editPassword') {
    //TODO
  }
  if (command === 'loginOut') {
    const query = {}
    Object.keys(route.query).forEach((item) => {
      query[item] = route.query[item]
    })
    userStore[UserActionEnum.RESET_TOKEN]()
    router.push({
      path: '/login',
      query: {
        redirect: route.path,
        ...query
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../styles/variables";

.avatar-container {
  float: right;
  margin-right: 30px;

  .user-avatar {
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    vertical-align: middle;
  }

  .user-name {
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    line-height: $navbarHeight;
    vertical-align: middle;
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
