<template>
  <div style="max-width: 450px">
    <el-input @keydown.enter="addContent" v-model="input" placeholder="请输入要发送的内容" clearable>
      <template #append>
        <el-button @click="inputCallback">发送</el-button>
      </template>
    </el-input>
  </div>
</template>

<script setup>
import {ref} from "vue";

const emit = defineEmits(["confirm-input"])
const input = ref(undefined)

function inputCallback() {
  emit("confirm-input",input.value)
  input.value = undefined
}


</script>
