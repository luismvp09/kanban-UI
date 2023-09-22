import { v4 as uuidv4 } from 'uuid'

const mockData = [
  {
    id: uuidv4(),
    title: "📝 por hacer",
    tasks: [
      {
        id: uuidv4(),
        title: "estudiar html",
      },
      {
        id: uuidv4(),
        title: "estudiar css",
      },
      {
        id: uuidv4(),
        title: "estudiar React",
      },
    ],
  },

  {
    id: uuidv4(),
    title: "✏️ En prograso",
    tasks: [
      {
        id: uuidv4(),
        title: "estudiar javascript",
      },
      
    ],
  },

  {
    id: uuidv4(),
    title: "✔️ Completadas",
    tasks: [
      {
        id: uuidv4(),
        title: "estudiar angular",
      },
    ],
  },
];

export default mockData;
