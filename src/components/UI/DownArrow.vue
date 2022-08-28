<template>
  <div class="arrow"></div>
</template>

<script>
export default {
  name: "DownArrow"
}
</script>

<style scoped>
.arrow {
  border: solid #ff3503;
  border-width: 0 6px 6px 0;
  display: inline-block;
  padding: 10px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>