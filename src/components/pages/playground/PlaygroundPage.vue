<template>
  <flex-container>
    <TransitionGroup name="list" appear>
      <template v-for="card in comps">
        <template v-if="card.ignoreCard">
          <component :is="card.comp" v-bind="card.props"/>
        </template>

        <template v-else>
          <card v-bind="card.props">
            <component :is="card.comp" @addCard="addCard"/>
          </card>
        </template>
      </template>
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

  transform: scale(0) rotateX(160deg);
}

</style>
<script setup>
import {ref} from "vue";

import ColorCard from "../playground/toys/ColorCard.vue"
import ToyCreateAnotherCard from "../playground/toys/ToyCreateAnotherCard.vue"

const card_type = {
  0: {
    "comp": ColorCard,
    "ignoreCard": true,
    "props": {
      "title": "变色卡"
    }
  },
  1: {
    "comp": ToyCreateAnotherCard,
    "props": {
      "title": "响应式卡片测试"
    }
  }

}

const comps = ref([card_type[1], card_type[0]])

function addCard(type) {
  console.log('type is ' + type)
  comps.value.push(card_type[type])
}

</script>