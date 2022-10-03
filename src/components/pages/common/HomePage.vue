<template>
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
        <template #footer>
          <emoji-box>💬</emoji-box>
          <emoji-box>😇</emoji-box>
          <emoji-box>浅试一下吧</emoji-box>
        </template>
      </card>

      <Card :title="c" v-for="c in arrays"/>
    </flex-container>


    <div style="text-align: center;color: var(--ep-menu-border-color);margin-bottom: 15px">
      <a style="color: var(--ep-menu-border-color)" href="https://beian.miit.gov.cn/">蜀ICP备2022009935号</a>
      ©2022 HyrKG
    </div>
  </div>

</template>

<script setup>

import {ref} from "vue";

const arrays = ref([])

function addContent(text) {
  if (text) {
    arrays.value.push(text)
  }
}
</script>

<style scoped lang="scss">

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