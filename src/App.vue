<template>
  <el-config-provider namespace="ep">

    <el-container class="operation-wrapper">
      <el-header class="el-header">
        <BaseHeader/>
      </el-header>
      <el-container>
        <el-main class="el-main">
          <div class="el-container">
            <HelloWorld/>
          </div>

        </el-main>
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
  /*height: 61px;*/
  /*padding: 0 0;*/
}

.el-main {
  padding: 0px 16px !important;
  height: calc(100vh - 61px);
  overflow-y: auto;
}

.el-container {
  margin: 0 auto;
  max-width: var(--vp-max-screen-width);
  text-align: center;
  color: var(--ep-text-color-primary);;
}


</style>
