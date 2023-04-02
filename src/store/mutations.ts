import { State } from "./state";
import { MutationTree } from "vuex";

export default {
  setDraggableTaskId(state, taskId: number) {
    state.draggableTaskId = taskId;
  },
  transferTask(state, transferColumnId: number) {
    let taskIndex = -1;
    const columnIndex = state.columns.findIndex((column) => {
      const index = column.tasks.findIndex(
        (task) => task.id === state.draggableTaskId
      );
      if (index !== -1) {
        taskIndex = index;
        return true;
      }
    });
    const transferColumnIndex = state.columns.findIndex(
      (column) => column.id === transferColumnId
    );

    if (
      taskIndex !== -1 &&
      columnIndex !== -1 &&
      transferColumnIndex !== -1 &&
      columnIndex !== transferColumnIndex
    ) {
      const [transferedTask] = state.columns[columnIndex].tasks.splice(
        taskIndex,
        1
      );
      state.columns[transferColumnIndex].tasks.push(transferedTask);
      state.draggableColumnId = -1;
      state.draggableTaskId = -1;
    }
  },
  setDraggableColumnId(state, columnId: number) {
    state.draggableColumnId = columnId;
  },
  clearDraggbleInfo(state) {
    state.draggableColumnId = -1;
    state.draggableTaskId = -1;
    state.hoverColumnId = -1;
  },
  setHoverColumnId(state, columnId: number) {
    state.hoverColumnId = columnId;
  },
} as MutationTree<State>;
