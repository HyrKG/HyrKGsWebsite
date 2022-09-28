<template>
  <div class="card-style">
    <div class="card-title">
      {{ title }}
    </div>

    <div>
      <slot/>
    </div>

    <div>
      <slot name="footer"></slot>
    </div>

  </div>
</template>

<script setup>
defineProps(["title"])
</script>

<style scoped>
.card-style {
  padding: 20px 16px;
  background-color: var(--ep-bg-color);
  border-radius: 8px;
  cursor: pointer;
  -webkit-transition: .2s;
  transition: .2s;
  width: auto;
  box-shadow: 0px 0px 10px rgb(228, 228, 228);
}

.card-style:hover {
  transform: scale(1.02);
}

.card-title {
  font-weight: 600;
  margin-top: 10px;
  font-size: 16px;
  color: var(--ep-text-color-primary);
}
.card-content
{

}
</style>