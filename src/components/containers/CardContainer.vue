<template>
  <div class="card-container">
    <slot/>
  </div>
</template>

<script setup>
defineProps(['title'])
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 10px;
  -webkit-animation: slideY .6s both;
  animation: slideY .6s both;
  margin-bottom: 30px;
}
</style>