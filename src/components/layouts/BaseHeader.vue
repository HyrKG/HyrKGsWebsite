<script lang="ts" setup>
import {isDark, toggleDark} from '~/composables';
import {ref} from 'vue'

const activeIndex = ref('/')

</script>

<template>
  <el-menu :default-active="activeIndex" menu-trigger="click" class="el-menu-demo" mode="horizontal" router="true">

    <div v-if="isDark">
      <img class="logo" alt="logo" src="../../assets/logo-dark.png"/>
    </div>
    <div v-else>
      <img class="logo" alt="logo" src="../../assets/logo-light.png"/>
    </div>

    <div class="flex-grow"/>
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/doc">文档</el-menu-item>
    <el-menu-item index="me">关于我</el-menu-item>
    <el-menu-item index="4" @click="toggleDark()">
      <button class="border-none w-full bg-transparent cursor-pointer" style="height: var(--ep-menu-item-height);">
        <i inline-flex i="dark:ep-moon ep-sunny"/>
      </button>
    </el-menu-item>

  </el-menu>
</template>

<style>
.el-menu-demo {
  margin: 0 auto;
  max-width: var(--vp-max-screen-width);
  border-bottom: none;
}

.logo {
  /*position: relative;*/
  height: calc(var(--ep-menu-item-height) * 0.6);
  padding: 0 var(--ep-menu-base-level-padding);
  margin-top: 15px;
}
</style>
