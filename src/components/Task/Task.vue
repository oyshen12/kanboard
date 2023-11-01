<template>
  <div class="task draggable" :id="task.id">
    <div class="task__name">{{ task.description }}</div>
    <div class="task__info">
      <div class="d-flex">
        <div class="task__info-img"></div>
        <div class="task__info-name">{{ task.name }}</div>
      </div>
      <div class="task__info-priority" :class="task.priority"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskKanban",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss" src="./Task.scss">
</style>