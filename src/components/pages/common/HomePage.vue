<template>
  <!--Display Content Here-->
  <div class="el-main-left-container e2">
    <!--                <BaseSideInfobox/>-->
    <div class="alert">
      左右拖动页面边界测试响应式布局
    </div>

  </div>

  <div class="el-main-right-container">

    <grid-container>
<!--      <card title="📁 研究开发中... 在线文件协同方案" disable-title-head>-->
<!--        <el-button @click="this.$router.push('/share-desk')">点击前往 圆桌</el-button>-->
<!--        <template #footer>-->
<!--          <emoji-box>🤔</emoji-box>-->
<!--          <emoji-box>✊</emoji-box>-->
<!--          <emoji-box>🧑‍💻</emoji-box>-->
<!--        </template>-->
<!--      </card>-->

<!--      <card title="🔮 魔法、特效，好玩东西的试验场。" disable-title-head>-->
<!--        <el-button @click="this.$router.push('/playground')">点击前往 游乐场</el-button>-->
<!--        <template #footer>-->
<!--          <emoji-box>💬</emoji-box>-->
<!--          <emoji-box>😇</emoji-box>-->
<!--          <emoji-box>🧙</emoji-box>-->
<!--        </template>-->
<!--      </card>-->

      <card title="色彩街头 / Alex Webb">
        <img class="autofix smooth-border" src="/src/assets/alexwebb_img1.png"/>
        <template #footer>
          <emoji-box>🤠</emoji-box>
          <emoji-box>😋</emoji-box>
        </template>
      </card>


    </grid-container>


    <div style="text-align: center;color: var(--ep-menu-border-color);margin-bottom: 15px">
      <a style="color: var(--ep-menu-border-color)" href="https://beian.miit.gov.cn/">蜀ICP备2022009935号</a>
      ©2022 HyrKG
    </div>
  </div>

</template>

<script setup>

</script>

<style scoped lang="scss">

.alert {
  background-color: #e8f2ff;
  padding: 24px 18px;
  border-radius: 8px;
  font-weight: bold;
  color: black;
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