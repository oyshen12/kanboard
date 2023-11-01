<template>
  <div class="kanban">
    <DraggableColumn
      v-for="column in kanbanStore.columns"
      :key="column.id"
      :column="column"
    />
  </div>
</template>

<script lang="ts" setup>
import DraggableColumn from "@/components/DraggableColumn/DraggableColumn.vue";
import {useKanbanStore} from "@/stores/kanban-store";
import {useDraggable} from '@/hooks/useDraggable'
import {mockColumns} from '@/mockData/mockData'

useDraggable();

const kanbanStore = useKanbanStore();
kanbanStore.setColumns(mockColumns);
</script>

<style scoped lang="scss" src="./Kanban.scss"/>