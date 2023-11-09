<template>
  <div class="column">
    <div class="column__info">
      <div>{{ column.name }}</div>
      <div class="column__info-amount">{{ column.tasks.length }}</div>
    </div>
    <div class="column__tasks-wrap">
      <div class="column__tasks">
        <Task v-for="task in column.tasks" :key="task.id" :task="task"/>
      </div>
      <div
        :id="column.id"
        :class="{
          active: dropColumnActive,
          activeHover: kanbanStore.hoverColumnId === column.id,
          dropzoneClass
        }"
        class="column__tasks-droppable dropzone"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, withDefaults, defineProps } from "vue";
import Task from "@/components/Task/Task.vue";
import { useKanbanStore } from "@/stores/kanban-store";
import { Column } from '@/stores/kanban-store/types'
import { dropzoneClass } from "@/hooks/useDraggable";

type Props = {
  column: Column
}
const props = withDefaults(defineProps<Props>(), {});

const kanbanStore = useKanbanStore();
const dropColumnActive = computed(() => {
  const { draggableColumnId } = kanbanStore;
  return draggableColumnId !== null && draggableColumnId !== props.column.id;
});
</script>

<style scoped lang="scss" src="./DraggableColumn.scss">
</style>