<template>
  <div style="max-width: 450px">
    <el-input @keydown.enter="addContent" v-model="input" placeholder="请输入要发送的内容" clearable>
      <template #append>
        <el-button @click="inputCallback">发送</el-button>
      </template>
    </el-input>
    <div v-if="alert.title" style="margin-top: 10px">
      <el-alert :type="alert.type" :title="alert.title" show-icon :closable="false"/>
    </div>

  </div>
</template>

<script setup>
import {ref} from "vue";

const emit = defineEmits(["confirm-input"])

const alert = ref({
  type: '',
  title: ''
})

const input = ref(undefined)

function inputCallback() {

  if (input.value) {
    emit("confirm-input", input.value)
    alert.value.type = "success"
    alert.value.title = "发送成功 " + input.value + " ！"
  }else {
    alert.value.type = "error"
    alert.value.title = "发送失败，内容不能为空！"
  }
  input.value = undefined
}


</script>
