<template>
  <div
      :class="['card',{'hide-shadow':disableShadow},{'font-color':keepFontBlack},{'enable-animation':!disableAnimation}]"
      @contextmenu.prevent="deleteCard">
    <div v-if="title" class="card-title">
      <spawn v-if="!disableTitleHead">#</spawn>
      {{ title }}
    </div>

    <div v-if="hasContent">
      <div v-if="hasTitle" style="margin-top: 15px"/>
      <slot/>
    </div>

    <div v-if="hasFooter">
      <div v-if="hasTitle || hasContent" style="margin-top: 15px"/>
      <slot name="footer"/>
    </div>
  </div>

</template>

<script setup>

import {computed, useSlots} from "vue";

const props = defineProps({
  title: String,
  disableTitleHead: {
    type: Boolean,
    default: false
  },
  keepFontBlack: {
    type: Boolean,
    default: false
  }
  ,
  disableShadow: {
    type: Boolean,
    default: false
  }
  ,
  disableAnimation: {
    type: Boolean,
    default: false
  }
  ,
  enableDeletable:
      {
        type: Boolean,
        default: false
      }
  ,
  cardId: {
    type: Number,
    default: -1
  }
})

const emit = defineEmits(["delete-card"])

const hasTitle = computed(() => props.title)
const hasContent = computed(() => useSlots().default)
const hasFooter = computed(() => useSlots().footer)

function deleteCard() {
  emit("delete-card", props.cardId)
}

</script>

<style scoped lang="scss">
.badge {
  transition: all 0.2s ease;
  width: 100%;
}


.card {
  padding: 20px 16px;
  background-color: var(--ep-bg-color);
  border-radius: 8px;
  cursor: pointer;
  transition: .2s;
  width: auto;
  box-shadow: 0px 0px 10px rgb(228, 228, 228);
}


html.dark {
  .card {
    box-shadow: none !important;
    border: 1px solid dimgray;
  }
}

.card-title {
  font-weight: 600;
  font-size: 16px;
  color: var(--ep-text-color-primary);
  transition: 0.2s;
}

.hide-shadow {
  box-shadow: none;
}

.font-color {
  color: black;

  .card-title {
    color: black;
  }
}

.enable-animation {
  &:hover {
    transform: scale(1.02);
  }
}
</style>