export type TaskPriority = "high" | "medium" | "low";
export type Task = {
  id: number;
  name: string;
  description: string;
  priority: TaskPriority;
};
export type Column = {
  id: number;
  name: string;
  tasks: Task[];
};

export type LeveragesStore = {
  columns: Column[],
  draggableTaskId: number | null;
  draggableColumnId: number | null;
  hoverColumnId: number | null;
}