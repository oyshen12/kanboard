import { State } from "./storeTypes";

export const state: State = {
  columns: [
    {
      id: 0,
      name: "ToDo",
      tasks: [
        {
          id: 0,
          name: "BS-169",
          description: "Description",
          priority: "high",
        },
        {
          id: 1,
          name: "BS-169",
          description: "Description",
          priority: "low",
        },
        {
          id: 2,
          name: "BS-169",
          description: "Description",
          priority: "medium",
        },
      ],
    },
  ],
};
