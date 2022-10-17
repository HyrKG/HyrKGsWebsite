<template>
  <div class="flex-container">
    <slot/>
  </div>
</template>

<script setup>
defineProps(['title'])
</script>

<style scoped lang="scss">
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  flex-grow: 1;

  -webkit-animation: slideY .6s both;
  animation: slideY .6s both;
  margin-bottom: 20px;
}

</style>