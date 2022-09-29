<template>
  <div class="card-style">
    <div v-if="title" class="card-title">
      <spawn v-if="!disableTitleHead">#</spawn>
      {{ title }}
    </div>

    <div>
      <slot/>
    </div>

    <div>
      <slot name="footer"/>
    </div>

    <div v-if="hasTitle">
      has title
    </div>
    <div v-if="hasContent">
      has content
    </div>

    <div v-if="hasFooter">
      has footer
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
  }

})

const hasTitle = computed(() => props.title)
const hasContent = computed(() => {
  return useSlots().default
})
const hasFooter = computed(() => {
  return useSlots().footer
})

</script>

<style scoped lang="scss">
.keep-around {
  margin-top: 15px;
}

.card-style {
  padding: 20px 16px;
  background-color: var(--ep-bg-color);
  border-radius: 8px;
  cursor: pointer;
  -webkit-transition: .2s;
  transition: .2s;
  width: auto;
  box-shadow: 0px 0px 10px rgb(228, 228, 228);
}

.card-style:hover {
  transform: scale(1.02);
}

.card-title {
  font-weight: 600;
  font-size: 16px;
  color: var(--ep-text-color-primary);
  margin-bottom: 15px;
  transition: 0.2s;

}


.card-content {

}
</style>