<template>
  <div class="column dropzone" :id="column.id">
    <div class="column__info">
      <div>{{ column.name }}</div>
      <div class="column__info-amount">{{ column.tasks.length }}</div>
    </div>
    <div class="column__tasks-wrap">
      <div class="column__tasks">
        <Task v-for="task in column.tasks" :key="task.id" :task="task" />
      </div>
      <div
        :class="{
          active: dropColumnActive,
          activeHover: hoverColumnId === column.id,
        }"
        class="column__tasks-droppable dropzone"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Task from "@/components/Task/Task.vue";
import { useStore } from "vuex";
import { key } from "@/store/index";

export default defineComponent({
  name: "DraggbleColumn",
  components: {
    Task,
  },
  props: {
    column: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore(key);

    const dropColumnActive = computed(() => {
      const draggableColumnId = store.state.draggableColumnId;
      return draggableColumnId !== -1 && draggableColumnId !== props.column.id;
    });

    return {
      draggableColumnId: computed(() => store.state.draggableColumnId),
      hoverColumnId: computed(() => store.state.hoverColumnId),
      dropColumnActive,
    };
  },
});
</script>

<style scoped lang="scss" src="./DraggableColumn.scss">
</style>