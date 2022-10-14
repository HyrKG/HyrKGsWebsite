<template>
  <card @mousemove="onMousemove"
        :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
        class="movearea card-title">
    <p>在此卡片上移动鼠标进行变色</p>
    <p>posx: {{ x }}</p>
  </card>
</template>

<script setup>
import {ref} from "vue";

const x = ref(910)


function onMousemove(e) {
  x.value = e.clientX
}

</script>

<style scoped>

.movearea {
  transition: 0.3s background-color ease;
  flex-grow: 1;
  color: white;
  font-size: 6px;
}

</style>