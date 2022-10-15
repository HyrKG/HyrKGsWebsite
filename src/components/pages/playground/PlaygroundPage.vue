<template>
  <flex-container>


    <TransitionGroup name="list">
      <template v-for="(card,uuid) in comps">


        <template v-if="card.ignoreCard">
          <component :is="card.comp" :key="uuid" :card-id="uuid" v-bind="card.props" @delete-card="deleteCard"/>
        </template>
        <template v-else>

          <card v-bind="card.props" :key="uuid" :card-id="uuid" @click="deleteLeftClick(uuid)"
                @delete-card="deleteCard">
            <component :is="card.comp" @addCard="addCard"/>
            <div v-if="card.props.content">
              {{ card.props.content }}
            </div>

            <div v-if="card.props.emojis" style="margin-top: 15px">
              <template v-for="emoji in card.props.emojis">
                <EmojiBox>{{ emoji }}</EmojiBox>
              </template>
            </div>

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
  user-select: none;
}

.list-enter-active {
  transition: all 0.5s ease;
}

.list-leave-active {
  transition: all 0.1s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0) rotateX(160deg);
}

@media screen and (max-width: 730px) {
  .card-style {
    flex-grow: 1;
    max-width: none;
  }
}

</style>
<script setup>
import {ref} from "vue";

import ColorCard from "../playground/toys/ColorCard.vue"
import ToyCreateAnotherCard from "../playground/toys/ToyCreateAnotherCard.vue"
import {v4} from 'uuid'

const hesays = ref("我的意思是，删了他们！当然，别右键我。")

const card_type = {
  0: {
    "comp": ColorCard,
    "ignoreCard": true,
    "props": {
      "title": ""
    }
  },
  1: {
    "comp": ToyCreateAnotherCard,
    "props": {
      "title": "响应式卡片测试"
    }
  },
  2: {
    "_i_am_magic": 1,
    "props":
        {
          "title": "右键其他任意卡片！",
          "content": hesays,
          "emojis": ["🧙", "👀", "⛔"]
        }
  }


}

const comps = ref({})

addComponent(card_type[2])
addComponent(card_type[1])
addComponent(card_type[0])


function addComponent(comp) {
  comps.value[v4()] = comp
}

function addCard(type) {
  addComponent(card_type[type])
}

function deleteLeftClick(card_id) {
  if (comps.value[card_id]._i_am_magic != undefined) {
    hesays.value = "🧙：可恶！"
    comps.value = {}

    const lastWords = {
      "props":
          {
            "title": "法师清空了全场",
            "content": hesays,
            "emojis": ["😕", " 😖"]
          }
    }
    addComponent(lastWords)
  }
}

function deleteCard(card_id) {
  if (comps.value[card_id]._i_am_magic == undefined) {
    hesays.value = "哈哈，好样的！"
  } else {
    hesays.value = "别妄想了，你是删不掉我的！"
    return
  }

  if (card_id === "-1") {
    return;
  }
  delete comps.value[card_id]

  //检查元素列表是否为空
  let count = 0;
  for (let c in comps.value) {
    count += 1;
  }
  console.log(count)
  if (count === 0) {
    addComponent(card_type[1])
  }
}
</script>