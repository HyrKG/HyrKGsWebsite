<template>
  <el-button @click="$emit('addCard')">创建新的卡片</el-button>
</template>

<script setup>
const emit = defineEmits(["addCard"])
</script>

<style scoped>

</style>