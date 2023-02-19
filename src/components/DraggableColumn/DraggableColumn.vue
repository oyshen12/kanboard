<template>
  <div
    @drop="onDrop($event, column.id)"
    @dragover.prevent
    @dragenter.prevent
    class="column"
  >
    <div class="column__info">
      <div>{{ column.name }}</div>
      <div class="column__info-amount">{{ column.tasks.length }}</div>
    </div>
    <div class="column__tasks">
      <Task v-for="task in column.tasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Task from "@/components/Task/Task.vue";
import { column } from "@/store/storeTypes";
import type { PropType } from "vue";

export default defineComponent({
  name: "DraggbleColumn",
  components: {
    Task,
  },
  props: {
    column: {
      type: Object as PropType<column>,
      required: true,
    },
  },
  setup() {
    const onDrop = (e: DragEvent, categoryId: number) => {
      //   const itemId = parseInt(e.dataTransfer.getData("itemId"));
      //   items.value = items.value.map((x) => {
      //     if (x.id == itemId) x.categoryId = categoryId;
      //     return x;
      //   });
    };
    return {
      onDrop,
    };
  },
});
</script>

<style scoped lang="scss" src="./DraggableColumn.scss">
</style>