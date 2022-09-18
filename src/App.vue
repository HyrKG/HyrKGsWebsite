<template>
  <el-config-provider namespace="ep">

    <el-container class="operation-wrapper">
      <el-header class="el-header">
        <BaseHeader/>
      </el-header>
      <el-container>
        <el-main class="el-main">
          <div class="el-container flex-container">
            <!--Display Content Here-->
            <div class="el-main-left-container e2">
              <!--                <BaseSideInfobox/>-->
              <div class="alert">
                （不重要）信息栏/侧栏
              </div>

            </div>

            <div class="el-main-right-container">
              <!--                <HelloWorld/>-->
              <div class="right-cards">
                <div class="right-card ">
                  <div class="job-card-title">
                    尹心玥晚上好，不能不好。
                  </div>

                  <div class="button-container">
                    <button class="search-buttons">
                      🤠
                    </button>
                    <button class="search-buttons">
                      😋
                    </button>
                  </div>
                </div>
              </div>

            </div>
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

.alert {
  background-color: #e8f2ff;
  padding: 24px 18px;
  border-radius: 8px;
  /*border: 1px solid #1a9537;*/
}

/*左侧固定长度显示*/
.el-main-left-container {
  width: 300px;
}

/*右侧flex布局，使得所有box等长度以保证美观性即可*/
.el-main-right-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /*flex: 3;*/
  padding-left: 40px;
  /*border: 1px solid red;*/
}

.right-cards {
  /*padding-top: 20px;*/
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  -webkit-animation: slideY .6s both;
  animation: slideY .6s both;
}

.right-card {
  padding: 20px 16px;
  background-color: var(--ep-bg-color);
  border-radius: 8px;
  cursor: pointer;
  -webkit-transition: .2s;
  transition: .2s;
  width: auto;
  box-shadow: 0px 0px 10px rgb(228, 228, 228);

}

.search-buttons {
  border: none;
  color: #fff;
  background-color: #e1ebfb;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  margin-top: 14px;
}

.search-buttons + .search-buttons
{
  margin-left: 6px;
}

.detail-button {
  background-color: #fff;
  color: #0162ff;
  font-size: 11px;
  font-weight: 500;
  padding: 6px 8px;
  border-radius: 4px;
}

.job-card-title {
  font-weight: 600;
  margin-top: 10px;
  font-size: 16px;
  color: var(--ep-text-color-primary);;
}

@media screen and (max-width: 730px) {
  .el-main-left-container {
    display: none;
  }
  .el-main-right-container
  {
    padding-left: 0;
  }
}

@media only screen and (max-width: var(--vp-max-screen-width)) {
  .e2 {
    flex: 0;
  }
}

</style>
