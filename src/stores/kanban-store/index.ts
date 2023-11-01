import {defineStore} from 'pinia';
import {Column} from './types'

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
        setDraggableTaskId( taskId: number) {
            this.draggableTaskId = taskId;
        },
        transferTask( transferColumnId: number) {
            let taskIndex = -1;
            const columnIndex = this.columns.findIndex((column) => {
                const index = column.tasks.findIndex(
                    (task) => task.id === this.draggableTaskId
                );
                if (index !== -1) {
                    taskIndex = index;
                    return true;
                }
            });
            const transferColumnIndex = this.columns.findIndex(
                (column) => column.id === transferColumnId
            );

            if (
                taskIndex !== -1 &&
                columnIndex !== -1 &&
                transferColumnIndex !== -1 &&
                columnIndex !== transferColumnIndex
            ) {
                const [transferedTask] = this.columns[columnIndex].tasks.splice(
                    taskIndex,
                    1
                );
                this.columns[transferColumnIndex].tasks.push(transferedTask);
                this.draggableColumnId = null;
                this.draggableTaskId = null;
            }
        },
        setDraggableColumnId(columnId: number | null) {
            this.draggableColumnId = columnId;
        },
        clearDraggableInfo() {
            this.draggableColumnId = null;
            this.draggableTaskId = null;
            this.hoverColumnId = null;
        },
        setHoverColumnId( columnId: number) {
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
