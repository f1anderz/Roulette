<template>
  <div class="container">
    {{result}}
  </div>
</template>

<script>
export default {
  name: "Result",
  data() {
    return {}
  },
  props:
      ['result']
}
</script>

<style scoped>
.container{
  color: #ff3503;
  font-size: 110%;
}
</style>