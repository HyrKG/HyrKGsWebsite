<template>
  <flex-container class="main-container">
    <flex-container class="left-container">
      <card title="ð§ åæ¡æ­£å¨æ½å·¥ä¸­..." style="background-color: var(--comp-light-blue)" disable-shadow keep-font-black
      >
        ä½ è½å¤ä½¿ç¨<u>ç¼å·</u>åå»ºæå å¥åæ¡ï¼å¨åæ¡ä¸­ï¼ä½ è½å¤å®æ¶å±äº«/ä¿å­æä»¶ã
      </card>

      <card title="ð ææªå å¥ä»»ä½åæ¡" style="background-color: var(--comp-light-blue)" disable-shadow keep-font-black
      >
        <div class="fix-card">
          <div>
            <el-input show-word-limit v-model="input" maxlength="6" placeholder="# åæ¡ç¼å·"/>
          </div>
          <div>
            <el-button @click="open" class="fix-card" type="primary">å å¥åæ¡</el-button>
          </div>
          <div>
            <el-button @click="open" class="fix-card">åå»ºåæ¡</el-button>
          </div>
        </div>
      </card>
    </flex-container>

    <flex-container class="right-container">
      <card class="card_desk" title="ðï¸ å·¥ä½ä¸­åæ¡" keep-font-black disable-shadow disable-title-head>
        ä¼¼ä¹æ²¡æåç°ä½ å å¥ä»»ä½åæ¡ãä½ å¯ä»¥å¨å å¥å¡çä¸­å å¥åæ¡ã
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
    message: 'å½åä»ä¸ºæ¼ç¤ºï¼å·ä½åè½å¼åä¸­ã',
    type: 'warning',
  })
}

watch(input, () => {
  input.value = input.value.toUpperCase()
})
</script>


<style scoped lang="scss">
/*è¦åflexå®¹å¨å±æ§*/
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