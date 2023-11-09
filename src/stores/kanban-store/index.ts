import { defineStore } from 'pinia';
import { Column } from './types'

type LeveragesStore = {
    columns: Column[],
    draggableTaskId: number | null;
    draggableColumnId: number | null;
    hoverColumnId: number | null;
}

export const useKanbanStore = defineStore('kanban', {
    state: (): LeveragesStore => ({
        columns: [],
        draggableTaskId: null,
        draggableColumnId: null,
        hoverColumnId: null,
    }),
    actions: {
        setDraggableTaskId(taskId: number | null) {
            this.draggableTaskId = taskId;
        },
        findTaskIndex(taskId: number | null) {
            let columnIndex = -1;
            let taskIndex = -1;
            this.columns.some((column, index) => {
                taskIndex = column.tasks.findIndex(task => task.id === taskId);
                if (taskIndex !== -1) {
                    columnIndex = index;
                    return true;
                }
            });
            return { columnIndex, taskIndex };
        },
        transferTask(transferColumnId: number) {
            const { taskIndex, columnIndex } = this.findTaskIndex(this.draggableTaskId);
            const transferColumnIndex = this.columns.findIndex(column => column.id === transferColumnId);
            if (columnIndex === -1 || transferColumnIndex === -1 || columnIndex === transferColumnIndex) return;

            const [transferedTask] = this.columns[columnIndex].tasks.splice(taskIndex, 1);
            this.columns[transferColumnIndex].tasks.push(transferedTask);
        },
        setDraggableColumnId(columnId: number | null) {
            this.draggableColumnId = columnId;
        },
        clearDraggableInfo() {
            this.draggableColumnId = null;
            this.draggableTaskId = null;
            this.hoverColumnId = null;
        },
        setHoverColumnId(columnId: number | null) {
            this.hoverColumnId = columnId;
        },
        setColumns(columns: Column[]) {
            this.columns = columns
        }
    },
    getters: {
        tasks: (state) => state.columns.flatMap(column => column.tasks),
    },
});
