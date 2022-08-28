<template>
  <choice
      v-for="choice in choices"
      :key="choice.id"
      :name="choice.name"
      :weight="choice.weight"
  ></choice>
</template>

<script>
import Choice from "@/components/Choice";

export default {
  name: "ChoiceList",
  components: {Choice},
  data() {
    return {
      choices: []
    }
  }
}
</script>

<style scoped>

</style>