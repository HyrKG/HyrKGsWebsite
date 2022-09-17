<script lang="ts" setup>
import {toggleDark} from '~/composables';</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <!--    <el-menu-item index="1">HyrKG</el-menu-item>-->
    <img class="logo" alt="logo" src="../../assets/logohyrkg2.png"/>

    <div class="flex-grow"/>
    <el-menu-item index="1">工单</el-menu-item>
    <el-sub-menu index="3">
      <template #title>其他</template>
      <el-menu-item index="3-1">item one</el-menu-item>
      <el-menu-item index="3-2">item two</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2">关于我</el-menu-item>

    <el-menu-item h="full" @click="toggleDark()">
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
