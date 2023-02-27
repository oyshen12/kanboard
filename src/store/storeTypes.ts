type taskPriority = "high" | "medium" | "low";
export type task = {
  id: number;
  name: string;
  description: string;
  priority: taskPriority;
  columnId: number;
};
export type column = {
  id: number;
  name: string;
};

export interface State {
  tasks: task[];
  columns: column[];
  draggableTaskId: number;
  draggableColumnId: number;
}
