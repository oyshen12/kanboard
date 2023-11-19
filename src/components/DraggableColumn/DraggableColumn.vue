<template>
  <div class="column">
    <div class="column__info">
      <div>{{ props.column.name }}</div>
      <div class="column__info-current">{{ props.column.tasks.length }}</div>
      <div>/</div>
      <div class="column__info-amount">{{ kanbanStore.tasks.length }}</div>
    </div>
    <div class="column__tasks-wrap">
      <div class="column__tasks">
        <Task v-for="task in props.column.tasks" :key="task.id" :task="task"/>
      </div>
      <div
        v-dropzone="props.column.id"
        class="column__tasks-droppable"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from "vue";
import Task from "@/components/Task/Task.vue";
import { Column } from '@/stores/kanban-store/types'
import { useKanbanStore } from "@/stores/kanban-store";

type Props = {
  column: Column
}
const props = withDefaults(defineProps<Props>(), {});

const kanbanStore = useKanbanStore();
</script>

<style scoped lang="scss" src="./DraggableColumn.scss">
</style>