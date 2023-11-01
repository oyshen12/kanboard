import {onMounted, onUnmounted} from "vue";
import {useKanbanStore} from '@/stores/kanban-store'

export const dropzoneClass = 'dropzone'
export const draggableClass = 'draggable'
export const useDraggable = () => {
    const kanbanStore = useKanbanStore();
    let currentElement: HTMLElement | null = null;
    let currentDropzone: HTMLElement | null = null;
    let offsetX = 0;
    let offsetY = 0;

    const findZoneUnderPoint = (x: number, y: number) => {
        const dropzones = document.querySelectorAll(`.${dropzoneClass}`);
        for (let i = 0; i < dropzones.length; i++) {
            const box = dropzones[i].getBoundingClientRect();
            if (x > box.left && x < box.right && y > box.top && y < box.bottom) {
                return dropzones[i] as HTMLElement;
            }
        }
    };
    const onMouseDown = (event: MouseEvent) => {
        currentElement = (event?.target as HTMLElement).closest(`.${draggableClass}`);
        if (currentElement) {
            const taskId = +currentElement.id;
            const column = kanbanStore.columns.find((column) =>
                column.tasks.some((task) => task.id === taskId)
            );
            const columnId = column ? column.id : null;
            kanbanStore.setDraggableTaskId(taskId);
            kanbanStore.setDraggableColumnId(columnId);

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
                kanbanStore.setHoverColumnId(+dropzone.id)
            }
            if (currentDropzone) {
                kanbanStore.setHoverColumnId(null)
            }
            currentDropzone = dropzone ?? null;
        }
    };
    const onMouseUp = (event: MouseEvent) => {
        const dropzone = findZoneUnderPoint(event.clientX, event.clientY);
        if (dropzone) {
            kanbanStore.transferTask(+dropzone.id)
        }
        kanbanStore.clearDraggableInfo()
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
}