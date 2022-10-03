<template>
  <el-config-provider namespace="ep">
    <el-container class="operation-wrapper">
      <!--      头部-->
      <el-header class="el-header">
        <BaseHeader/>
      </el-header>

      <!--      内容容器-->
      <el-container>
        <router-view></router-view>
      </el-container>

    </el-container>
  </el-config-provider>
</template>

<style>
.operation-wrapper {
  width: 100% !important;
}

.el-header {
  border-bottom: solid 1px var(--ep-menu-border-color);
}
</style>