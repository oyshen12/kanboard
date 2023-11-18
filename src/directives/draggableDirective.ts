import { DirectiveBinding } from "vue";
import { draggableClass } from "@/hooks/useDraggable";

export const draggableDirective = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    el.id = binding.value;
    el.classList.add(draggableClass);
  },
}