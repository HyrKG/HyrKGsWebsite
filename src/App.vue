<template>
  <el-config-provider namespace="ep">
    <el-container class="operation-wrapper">

      <!--      头部-->
      <el-header class="el-header">
        <BaseHeader/>
      </el-header>

      <!--      内容容器-->
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
              <flex-container>
                <card title="色彩街头 / Alex Webb">
                  <img class="autofix smooth-border" src="/src/assets/alexwebb_img1.png"/>
                  <template #footer>
                    <emoji-box>🤠</emoji-box>
                    <emoji-box>😋</emoji-box>
                  </template>
                </card>

                <card title="发送响应式信息" disable-title-head>
                  <TestCardPublish @confirm-input="addContent"/>
                </card>

                <Card :title="c" v-for="c in arrays"/>
              </flex-container>
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


@media screen and (max-width: 730px) {
  .el-main-left-container {
    display: none;
  }

  .el-main-right-container {
    padding-left: 0;
  }
}


</style>
<script setup>

import {ref} from "vue";

const arrays = ref([])

function addContent(text) {
  if (text) {
    arrays.value.push(text)
  }
}
</script>
