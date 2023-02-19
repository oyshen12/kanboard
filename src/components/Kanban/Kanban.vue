<template>
  <div>
    <DraggableColumn />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DraggableColumn from "@/components/DraggableColumn/DraggableColumn";

export default defineComponent({
  name: "KanBan",
  components: {
    DraggableColumn,
  },
});
</script>

<style scoped lang="scss" src="./Kanban.scss">
</style>