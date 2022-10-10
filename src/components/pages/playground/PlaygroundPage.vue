<template>
  <flex-container>
    <card title="响应卡片测试">
      <ToyCreateAnotherCard @addCard="invokedAddCard"/>
    </card>


    <card v-for="(item,index) in empty_card_list" :title="'响应式卡片'+String(index+1)">
      {{ item }}
    </card>


  </flex-container>
</template>


<style scoped lang="scss">
$card-margin: 10px;

.card-style {
  margin: $card-margin $card-margin $card-margin $card-margin;
}
</style>
<script setup>
import {ref} from "vue";

const empty_card_list = ref([])


function invokedAddCard() {
  empty_card_list.value.push("创建于 " + Date.now())
}

</script>