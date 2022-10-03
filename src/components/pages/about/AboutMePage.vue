<template>
  关于我，这是一个singleton页面，你可以看到该组件即为完全页面表现。

  <el-input v-model="pageBack"></el-input>
  <el-button @click="routeBack">点击我路由返回上{{ pageBack }}页</el-button>
</template>

<script setup>

import {router} from "~/router";
import {ref} from "vue";

const pageBack = ref(1)

const routeBack = () => {
  router.go(-pageBack.value)
}

</script>

<style scoped>

</style>