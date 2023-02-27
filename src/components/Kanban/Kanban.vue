<template>
  <div class="kanban">
    <DraggableColumn
      v-for="column in columns"
      :key="column.id"
      :column="column"
    />
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import DraggableColumn from "@/components/DraggableColumn/DraggableColumn";
import { useStore } from "vuex";
import { key } from "@/store/index";

export default defineComponent({
  name: "KanBan",
  components: {
    DraggableColumn,
  },
  setup() {
    const store = useStore(key);
    return {
      columns: computed(() => store.state.columns),
    };
  },
});
</script>

<style scoped lang="scss" src="./Kanban.scss">
</style>