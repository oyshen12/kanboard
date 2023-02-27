<template>
  <div class="column">
    <div class="column__info">
      <div>{{ column.name }}</div>
      <div class="column__info-amount">{{ tasks.length }}</div>
    </div>
    <div
      class="column__tasks-wrap"
      @drop="onDrop"
      @dragover.prevent
      @dragenter.prevent
      :class="{ active: dropColumnActive }"
    >
      <div class="column__tasks">
        <Task
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @onDragStart="(taskId) => onDragStart(taskId)"
          @onDragEnd="onDragEnd()"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Task from "@/components/Task/Task.vue";
import { column } from "@/store/storeTypes";
import type { PropType } from "vue";
import { useStore } from "vuex";
import { key } from "@/store/index";

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
  setup(props) {
    const store = useStore(key);

    const tasks = computed(() =>
      store.state.tasks.filter((task) => task.columnId === props.column.id)
    );

    const dropColumnActive = computed(() => {
      const draggableColumnId = store.state.draggableColumnId;
      return draggableColumnId !== -1 && draggableColumnId !== props.column.id;
    });

    const onDrop = () => {
      store.commit("transferTask", props.column.id);
    };
    const onDragStart = (taskId: number) => {
      store.commit("setDraggableTaskId", taskId);
      store.commit("setDraggableColumnId", props.column.id);
    };
    const onDragEnd = () => {
      store.commit("clearDraggbleInfo");
    };
    return {
      onDrop,
      onDragStart,
      tasks,
      dropColumnActive,
      onDragEnd,
    };
  },
});
</script>

<style scoped lang="scss" src="./DraggableColumn.scss">
</style>