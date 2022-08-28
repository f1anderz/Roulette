<template>
  <div class="button">{{ value }}</div>
</template>

<script>
export default {
  name: "Button",
  props: ['value'],
  methods: {

  }
}
</script>

<style scoped>
.button {
  color: #ff3503;
  font-size: 170%;
  font-weight: 800;
}

.button:hover {
  color: rgba(255, 53, 3, .8);
  cursor: pointer;
}
</style>