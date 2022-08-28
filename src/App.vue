<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "@/pages/Home"
import UI from "@/components/UI";

export default {
  components: {Home, UI}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
}
</style>
