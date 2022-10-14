<template>
  <card @mousemove="onMousemove"
        :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
        class="movearea card-title">
    <p>在卡片上悬浮变色</p>
    <p>{{ x }}</p>
  </card>
</template>

<script setup>
import {ref} from "vue";

const x = ref(parseInt(Math.random() * 1500))


function onMousemove(e) {
  x.value = e.clientX
}

</script>

<style scoped>

.movearea {
  color: white;
  font-size: 15px;
}

</style>