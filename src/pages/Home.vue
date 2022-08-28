<template>
  <div class="main">
    <result class="result" :result="result"></result>
  </div>
</template>

<script>
import Result from "@/components/Result";
import DownArrow from "@/components/UI/DownArrow";

export default {
  name: "Home",
  components: {Result, DownArrow},
  data() {
    return {
      result: ""
    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
  background: #383838;
}

.result{

}

.arrow {

}
</style>