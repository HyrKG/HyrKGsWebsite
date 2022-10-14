<template>
  <div>
    <el-button @click="$emit('addCard',0)">创建新的变色卡</el-button>
  </div>
  <div>
    <el-button @click="$emit('addCard',1)">自我，复制！！</el-button>
  </div>
</template>

<script setup>
const emit = defineEmits(["addCard"])
</script>

<style scoped>

</style>