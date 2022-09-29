<template>
  <button class="keyword-container">
    <slot></slot>
  </button>
</template>

<script setup>

</script>

<style scoped>
.keyword-container {
  border: none;
  color: #fff;
  background-color: #e1ebfb;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
}

.keyword-container + .keyword-container {
  margin-left: 6px;
}
</style>