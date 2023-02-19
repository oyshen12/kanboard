<template>
  <div class="column">
    <div class="column__info">
      <div>ToDo</div>
      <div class="column__info-amount">14</div>
    </div>
    <div class="column__tasks">
      <Task />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Task from "@/components/Task/Task";

export default defineComponent({
  name: "DraggbleColumn",
  components: {
    Task,
  },
});
</script>

<style scoped lang="scss" src="./DraggableColumn.scss">
</style>