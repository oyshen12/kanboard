<template>
  <div draggable="true" @dragstart="onDragStart($event, task.id)" class="task">
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
import { task } from "@/store/storeTypes";
import type { PropType } from "vue";

export default defineComponent({
  name: "TaskKanboard",
  props: {
    task: {
      type: Object as PropType<task>,
      required: true,
    },
  },
  setup() {
    const onDragStart = (e: DragEvent, id: number) => {
      if (e.dataTransfer) {
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("itemId", id.toString());
      }
    };

    return {
      onDragStart,
    };
  },
});
</script>

<style scoped lang="scss" src="./Task.scss">
</style>