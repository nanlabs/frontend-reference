import { Todo } from "@/types";

const TODOS: Todo[] = [
  {
    id: '1',
    title: 'Complete Homework',
    description: 'Finish the assignment for the history class by 5 PM.',
    completed: false,
  },
  {
    id: '2',
    title: 'Buy Groceries',
    description: 'Purchase fruits, vegetables, and milk from the supermarket.',
    completed: true,
  },
  {
    id: '3',
    title: 'Call Grandma',
    description: 'Give Grandma a call to wish her a happy birthday.',
    completed: false,
  },
];

export const db = {
  todo: {
    create: ({ data }: { data: Todo }) => {
      TODOS.push(data);
      return new Promise<Todo>((resolve, reject) => {
        try {
          resolve(data)
        } catch (error) {
          reject(error)
        }
      })
    },
    findMany: () => new Promise<Array<Todo>>((resolve, reject) => {
      try {
        resolve(TODOS)
      } catch (error) {
        reject(error)
      }
    }),
    findById: (id: string) => new Promise<Todo>((resolve, reject) => {
      try {
        const user = TODOS.find(todo => todo.id === id)
        if (!user) {
          throw new Error('User not found')
        }
        resolve(user)
      } catch (error) {
        reject(error)
      }
    }),
    update: (id: string, data: Todo) => new Promise<Todo>((resolve, reject) => {
      try {
        const userIndex = TODOS.findIndex(todo => todo.id === id)
        if (userIndex === -1) {
          throw new Error('User not found')
        }
        TODOS[userIndex] = data
        resolve(data)
      } catch (error) {
        reject(error)
      }
    }),
  },
}
