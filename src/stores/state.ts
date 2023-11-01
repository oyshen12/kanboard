import * as storeType from "./storeTypes";

export const state = {
  columns: [
    {
      id: 0,
      name: "Selected for development",
      tasks: [
        {
          id: 0,
          name: "BS-161",
          description: "Description",
          priority: "high",
        },
        {
          id: 1,
          name: "BS-162",
          description: "Description",
          priority: "low",
        },
        {
          id: 2,
          name: "BS-163",
          description: "Description",
          priority: "medium",
        },
      ],
    },
    {
      id: 1,
      name: "Suspended",
      tasks: [
        {
          id: 3,
          name: "BS-164",
          description: "Description",
          priority: "high",
        },
        {
          id: 4,
          name: "BS-165",
          description: "Description",
          priority: "low",
        },
        {
          id: 5,
          name: "BS-166",
          description: "Description",
          priority: "medium",
        },
      ],
    },
    {
      id: 2,
      name: "In work",
      tasks: [
        {
          id: 6,
          name: "BS-167",
          description: "Description",
          priority: "low",
        },
        {
          id: 7,
          name: "BS-168",
          description: "Description",
          priority: "medium",
        },
        {
          id: 8,
          name: "BS-169",
          description: "Description",
          priority: "low",
        },
      ],
    },
    {
      id: 3,
      name: "Ready",
      tasks: [
        {
          id: 9,
          name: "BS-170",
          description: "Description",
          priority: "medium",
        },
        {
          id: 10,
          name: "BS-171",
          description: "Description",
          priority: "low",
        },
        {
          id: 11,
          name: "BS-172",
          description: "Description",
          priority: "high",
        },
      ],
    },
  ] as storeType.column[],
  draggableTaskId: -1,
  draggableColumnId: -1,
  hoverColumnId: -1,
};

export type State = typeof state;
