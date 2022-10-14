<template>
  <flex-container>

    <template v-for="card in comps">

      <template v-if="card.ignoreCard">
        <component :is="card.comp" v-bind="card.props"/>
      </template>

      <template v-else>
        <card v-bind="card.props">
          <component :is="card.comp"/>
        </card>
      </template>

    </template>


  </flex-container>
</template>


<style scoped lang="scss">
$card-margin: 10px;
$card-max-width: 300px;

.card-style {
  margin: $card-margin $card-margin $card-margin $card-margin;
  max-width: $card-max-width;
}


</style>
<script setup lang="ts">
import {ref} from "vue";

import ColorCard from "../playground/toys/ColorCard.vue"
import ToyCreateAnotherCard from "../playground/toys/ToyCreateAnotherCard.vue"

const comps = ref([
  {
    "comp": ColorCard,
    "ignoreCard": true,
    "props": {
      "title": "变色卡"
    }
  },
  {
    "comp": ToyCreateAnotherCard,
    "props": {
      "title": "响应式卡片测试"
    }
  }
])

</script>