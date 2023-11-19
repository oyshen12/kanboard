<template>
  <div class="kanban">
    <div class="kanban__controls">
      <KanbanSearch :model-value="search" @update:model-value="onUpdateSearch"/>
    </div>
    <div class="kanban__columns">
      <DraggableColumn
        v-for="column in filteredColumns"
        :key="column.id"
        :column="column"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import DraggableColumn from "@/components/DraggableColumn/DraggableColumn.vue";
import KanbanSearch from "@/components/KanbanSearch/KanbanSearch.vue";
import { useKanbanStore } from "@/stores/kanban-store";
import { useDraggable } from '@/hooks/useDraggable'
import { useKanbanFilter } from "@/hooks/useKanbanFilter";
import { mockColumns } from '@/mockData/mockData'

useDraggable();
const { search, setSearch, filteredColumns } = useKanbanFilter();

const kanbanStore = useKanbanStore();
kanbanStore.setColumns(mockColumns);

const onUpdateSearch = (value: string): void => {
  setSearch(value);
}
</script>

<style scoped lang="scss" src="./Kanban.scss"/>