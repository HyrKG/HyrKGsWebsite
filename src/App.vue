<template>
  <el-config-provider namespace="ep">

    <el-container class="operation-wrapper">
      <el-header class="el-header">
        <BaseHeader/>
      </el-header>
      <el-container>
        <el-main class="el-main">
          <div class="el-container">
            <!--Display Content Here-->


            <el-container>
              <el-container class="el-main-left-container e2">
                <!--                <BaseSideInfobox/>-->
                （不重要）信息栏/侧栏

              </el-container>

              <el-container class="el-main-right-container">
                <!--                <HelloWorld/>-->
                <div>
                  （重要）信息栏
                </div>
              </el-container>

            </el-container>

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
  max-width: var(--vp-max-screen-width);
  text-align: center;
  color: var(--ep-text-color-primary);;

  margin: 20px auto 0;
  /*border: 1px solid red;*/
}

.el-main-left-container {
  flex: 1;
  border: 1px solid red;
}

.el-main-right-container {
  flex: 3;
  border: 1px solid red;
}

@media only screen and (max-width: var(--vp-max-screen-width)) {
 .e2
 {
   flex: 0;
 }
}

</style>
