<template>
  <div class="column">
    <div class="column__info">
      <div class="column__amount">14</div>
      <div class="column__name">ToDo</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DraggbleColumn",
});
</script>

<style scoped lang="scss" src="./DraggableColumn.scss">
</style>