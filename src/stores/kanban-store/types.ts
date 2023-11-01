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