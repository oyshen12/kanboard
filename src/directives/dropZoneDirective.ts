import { DirectiveBinding, watch } from "vue";
import { dropzoneClass } from "@/hooks/useDraggable";
import { useKanbanStore } from "@/stores/kanban-store";
import { storeToRefs } from "pinia";

export const dropZoneDirective = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    const kanbanStore = useKanbanStore();
    const { draggableColumnId, hoverColumnId } = storeToRefs(kanbanStore)
    const id = binding.value;
    el.id = id;
    el.classList.add(dropzoneClass);

    watch(draggableColumnId, (value) => {
      const dropColumnActive = value !== null && value !== id;
      if (dropColumnActive) {
        el.classList.add('active')
      } else {
        el.classList.remove('active')
      }
    })
    watch(hoverColumnId, (value) => {
      if (value === id) {
        el.classList.add('activeHover')
      } else {
        el.classList.remove('activeHover')
      }
    })
  },
}