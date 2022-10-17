<template>
  <flex-container class="main-container">
    <flex-container class="left-container">
      <card title="🚧 圆桌正在施工中..." style="background-color: var(--comp-light-blue)" disable-shadow keep-font-black
      >
        你能够使用<u>编号</u>创建或加入圆桌，在圆桌中，你能够实时共享/保存文件。
      </card>

      <card title="📁 暂未加入任何圆桌" style="background-color: var(--comp-light-blue)" disable-shadow keep-font-black
      >
        <div class="fix-card">
          <div>
            <el-input show-word-limit v-model="input" maxlength="6" placeholder="# 圆桌编号"/>
          </div>
          <div>
            <el-button @click="open" class="fix-card" type="primary">加入圆桌</el-button>
          </div>
          <div>
            <el-button @click="open" class="fix-card">创建圆桌</el-button>
          </div>
        </div>
      </card>
    </flex-container>

    <flex-container class="right-container">
      <card class="card_desk" title="🗃️ 工作中圆桌" keep-font-black disable-shadow disable-title-head>
        似乎没有发现你加入任何圆桌。你可以在左侧选择加入圆桌。
      </card>
    </flex-container>
  </flex-container>
</template>

<script lang="ts" setup>
import {ElMessage} from 'element-plus'
import {ref, watch} from "vue";

const input = ref()

const open = () => {
  ElMessage({
    message: '当前仅为演示，具体功能开发中。',
    type: 'warning',
  })
}

watch(input, () => {
  input.value = input.value.toUpperCase()
})
</script>


<style scoped lang="scss">
/*覆写flex容器属性*/
.main-container {
  justify-content: left;

}

.left-container {
  flex-direction: column;
  justify-content: left;
  max-width: 300px;
  margin-bottom: 0px;
}

.right-container {
  justify-content: left;
  flex-direction: column;
  flex-grow: 1;

}

@media screen and (max-width: 800px) {
  .left-container {
    max-width: 100%;
  }
}

.fix-card {
  width: 100%;

  div + div {
    margin-top: 5px;
  }
}

.card {
  margin: 10px;
  /*flex-grow: 1;*/
}

.card_desk {
  background-color: var(--comp-wood-yellow);
  min-height: 300px;
  height: 100%;
  border-radius: 40px;

  &:hover {
    border-radius: 20px;
  }
}

p {
  line-height: 0.4rem;
}

</style>