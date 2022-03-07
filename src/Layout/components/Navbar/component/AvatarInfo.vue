<template>
  <div class="avatar-container">
    <el-dropdown trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        <img class="user-avatar" :src="userInfo.avatar+'?imageView2/1/w/80/h/80'">
        <span class="user-name">{{ userInfo.name }}</span>
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
            退出登陆
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import {useStore} from "vuex";
import {UserMutationEnum} from "@/store/modules/user/mutations";
import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const route = useRoute()
const store = useStore()
const userInfo = store.state.user
const handleCommand = (command: string | number | object) => {
  if (command === 'editPassword') {
    //TODO
  }
  if (command === 'loginOut') {
    store.commit(`user/${UserMutationEnum.RESET_TOKEN}`)
    router.push(`login?redirect=${route.fullPath}`)
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../styles/variables.module";

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
