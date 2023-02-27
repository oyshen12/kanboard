import { State } from "./storeTypes";

export default {
  setDraggableTaskId(state: State, taskId: number) {
    state.draggableTaskId = taskId;
  },
  transferTask(state: State, columnId: number) {
    const task = state.tasks.find((task) => task.id === state.draggableTaskId);

    if (task) {
      task.columnId = columnId;
      state.draggableColumnId = -1;
      state.draggableTaskId = -1;
    }
  },
  setDraggableColumnId(state: State, columnId: number) {
    state.draggableColumnId = columnId;
  },
  clearDraggbleInfo(state: State) {
    state.draggableColumnId = -1;
    state.draggableTaskId = -1;
  },
};
