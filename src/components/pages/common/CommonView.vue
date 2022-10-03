<template>
  <el-config-provider namespace="ep">
    <el-container class="operation-wrapper">
      <!--      头部-->
      <el-header class="el-header">
        <BaseHeader />
      </el-header>

      <!--      内容容器-->
      <el-container>

        <el-main class="el-main">
          <div class="el-container flex-container">
            <router-view></router-view>
          </div>
        </el-main>

      </el-container>

    </el-container>
  </el-config-provider>
</template>

<script setup>
</script>

<style scoped>
.operation-wrapper {
  width: 100% !important;
}

.el-main {
  padding: 0px 16px !important;
  height: calc(100vh - 61px);
  overflow-y: auto;
}

.el-container {
  max-width: var(--vp-max-screen-width);
  /*text-align: center;*/
  /*color: var(--ep-text-color-primary);;*/
  margin: 20px auto 0;
  /*border: 1px solid red;*/
}

.flex-container {
  display: -webkit-box;
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
}


.el-header {
  border-bottom: solid 1px var(--ep-menu-border-color);
}
</style>