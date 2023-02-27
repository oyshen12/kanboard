import { State } from "./storeTypes";

export const state: State = {
  tasks: [
    {
      id: 0,
      name: "BS-161",
      description: "Description",
      priority: "high",
      columnId: 0,
    },
    {
      id: 1,
      name: "BS-162",
      description: "Description",
      priority: "low",
      columnId: 0,
    },
    {
      id: 2,
      name: "BS-163",
      description: "Description",
      priority: "medium",
      columnId: 0,
    },
    {
      id: 3,
      name: "BS-164",
      description: "Description",
      priority: "high",
      columnId: 1,
    },
    {
      id: 4,
      name: "BS-165",
      description: "Description",
      priority: "low",
      columnId: 1,
    },
    {
      id: 5,
      name: "BS-166",
      description: "Description",
      priority: "medium",
      columnId: 1,
    },
  ],
  columns: [
    {
      id: 0,
      name: "ToDo",
    },
    {
      id: 1,
      name: "InJob",
    },
  ],
  draggableTaskId: -1,
  draggableColumnId: -1,
};
