import { Column } from '@/stores/kanban-store/types'

export const mockColumns: Column[] = [{
  id: 0,
  name: "К выполнению",
  tasks: [
    {
      id: 0,
      name: "BS-161",
      description: "Исправить кнопку",
      priority: "high",
    },
    {
      id: 1,
      name: "BS-162",
      description: "Поменять цвет",
      priority: "low",
    },
    {
      id: 2,
      name: "BS-163",
      description: "Рефакторинг",
      priority: "medium",
    },
  ],
},
  {
    id: 1,
    name: "В работе",
    tasks: [
      {
        id: 3,
        name: "BS-164",
        description: "Внедрение нового функционала",
        priority: "high",
      },
      {
        id: 4,
        name: "BS-165",
        description: "Доработка по задаче",
        priority: "low",
      },
      {
        id: 5,
        name: "BS-166",
        description: "Багфикс",
        priority: "medium",
      },
    ],
  },
  {
    id: 2,
    name: "На проверке",
    tasks: [
      {
        id: 6,
        name: "BS-167",
        description: "Ресерч",
        priority: "low",
      },
      {
        id: 7,
        name: "BS-168",
        description: "Прочтение документации",
        priority: "medium",
      },
      {
        id: 8,
        name: "BS-169",
        description: "Написать документацию",
        priority: "low",
      },
    ],
  },
  {
    id: 3,
    name: "Готово",
    tasks: [
      {
        id: 9,
        name: "BS-170",
        description: "Подготовка к собеседованию",
        priority: "medium",
      },
      {
        id: 10,
        name: "BS-171",
        description: "Написать тесты",
        priority: "low",
      },
      {
        id: 11,
        name: "BS-172",
        description: "Сделать адаптив",
        priority: "high",
      },
    ],
  },]