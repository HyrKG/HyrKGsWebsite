<template>
  <flex-container>

    <card title="鼠标追随变色背景" @mousemove="onMousemove"
          :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
          class="movearea card-title">
      <p>在此卡片上移动鼠标进行变色</p>
      <p>posx: {{ x }}</p>
    </card>

    <card title="响应卡片测试">
      <ToyCreateAnotherCard @addCard="invokedAddCard"/>
    </card>


    <TransitionGroup name="list" style="flex-grow: 1;">
      <card v-for="(item,index) in empty_card_list" :title="'卡片'+String(index+1)">
        {{ item }}
      </card>
    </TransitionGroup>


  </flex-container>
</template>


<style scoped lang="scss">
$card-margin: 10px;
$card-max-width: 300px;


.card-style {
  margin: $card-margin $card-margin $card-margin $card-margin;
  max-width: $card-max-width;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}

.movearea {
  transition: 0.3s background-color ease;
  max-width: $card-max-width;
  flex-grow: 1;
  color: white;
  font-size: 6px;
}

</style>
<script setup>
import {ref} from "vue";

const empty_card_list = ref([])


function invokedAddCard() {
  empty_card_list.value.push("创建于 " + Date.now())
}

const x = ref(910)

function onMousemove(e) {
  x.value = e.clientX
}

</script>