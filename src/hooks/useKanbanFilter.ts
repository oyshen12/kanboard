import { computed, readonly, ref } from "vue";
import { useKanbanStore } from "@/stores/kanban-store";
import { storeToRefs } from "pinia";
import { Task } from "@/stores/kanban-store/types";

export const useKanbanFilter = () => {
  const kanbanStore = useKanbanStore();
  const { columns } = storeToRefs(kanbanStore);
  const search = ref('');
  const setSearch = (value: string): void => {
    search.value = value;
  }

  const searchFilter = (tasks: Task[]): Task[] => {
    const searchValue = search.value.toLowerCase();
    return tasks.filter((task) => task.name.toLowerCase().includes(searchValue) || task.description.toLowerCase().includes(searchValue));
  }

  const filteredColumns = computed(() => {
    return columns.value.map((column) => {
      const filteredTasks = searchFilter(column.tasks);
      return { ...column, tasks: filteredTasks };
    });
  })


  return {
    search: readonly(search),
    filteredColumns,
    setSearch
  }
}