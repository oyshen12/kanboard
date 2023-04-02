type taskPriority = "high" | "medium" | "low";
export type task = {
  id: number;
  name: string;
  description: string;
  priority: taskPriority;
};
export type column = {
  id: number;
  name: string;
  tasks: task[];
};
