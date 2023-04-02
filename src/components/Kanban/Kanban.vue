<template>
  <div class="kanban">
    <DraggableColumn
      v-for="column in columns"
      :key="column.id"
      :column="column"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, onUnmounted } from "vue";
import DraggableColumn from "@/components/DraggableColumn/DraggableColumn.vue";
import { useStore } from "vuex";
import { key } from "@/store/index";
import * as storeType from "@/store/storeTypes";

export default defineComponent({
  name: "KanBan",
  components: {
    DraggableColumn,
  },
  setup() {
    const store = useStore(key);
    let currentElement = null as HTMLElement | null;
    let currentDropzone = null as Element | null;
    let offsetX = 0;
    let offsetY = 0;

    const findZoneUnderPoint = (x: number, y: number) => {
      const dropzones = document.querySelectorAll(".dropzone");
      for (let i = 0; i < dropzones.length; i++) {
        const box = dropzones[i].getBoundingClientRect();
        if (x > box.left && x < box.right && y > box.top && y < box.bottom) {
          return dropzones[i];
        }
      }
    };
    const onMouseDown = (event: MouseEvent) => {
      currentElement = (event?.target as HTMLElement).closest(".draggable");
      if (currentElement) {
        const taskId = +currentElement.id;
        const column = store.state.columns.find((column) =>
          column.tasks.some((task) => task.id === taskId)
        );
        const columnId = column ? column.id : -1;
        store.commit("setDraggableTaskId", taskId);
        store.commit("setDraggableColumnId", columnId);

        const box = currentElement.getBoundingClientRect();
        offsetX = event.clientX - box.x;
        offsetY = event.clientY - box.y;
        currentElement.classList.add("drag");
        currentElement.style.width = box.width.toFixed() + "px";
        currentElement.style.height = box.height.toFixed() + "px";
        currentElement.style.left = event.clientX - offsetX + "px";
        currentElement.style.top = event.clientY - offsetY + "px";
        currentElement.style.position = "fixed";
        currentElement.style.zIndex = "999";
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      }
    };
    const onMouseMove = (event: MouseEvent) => {
      if (currentElement) {
        currentElement.style.left = event.clientX - offsetX + "px";
        currentElement.style.top = event.clientY - offsetY + "px";
      }
      const dropzone = findZoneUnderPoint(event.clientX, event.clientY);
      if (dropzone !== currentDropzone) {
        if (dropzone) {
          store.commit("setHoverColumnId", +dropzone.id);
        }
        if (currentDropzone) {
          store.commit("setHoverColumnId", -1);
        }
        currentDropzone = dropzone ?? null;
      }
    };
    const onMouseUp = (event: MouseEvent) => {
      const dropzone = findZoneUnderPoint(event.clientX, event.clientY);
      if (dropzone) {
        store.commit("transferTask", +dropzone.id);
      }
      store.commit("clearDraggbleInfo");
      if (currentElement) {
        currentElement.setAttribute("style", "");
      }
      currentElement = null;
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    };

    onMounted(() => {
      document.addEventListener("mousedown", onMouseDown);
    });
    onUnmounted(() => {
      document.removeEventListener("mousedown", onMouseDown);
    });

    return {
      columns: computed(() => store.state.columns),
    };
  },
});
</script>

<style scoped lang="scss" src="./Kanban.scss">
</style>