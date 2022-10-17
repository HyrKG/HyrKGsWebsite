<template>
  <button class="emoji-box">
    <slot></slot>
  </button>
</template>

<script setup>

</script>

<style scoped lang="scss">
.emoji-box {
  border: none;
  background-color: #e1ebfb;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  color: black;
}

.emoji-box + .emoji-box {
  margin-left: 6px;
}
</style>