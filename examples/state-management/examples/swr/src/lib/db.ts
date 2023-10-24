type DbUser = {
  id: string;
  name: string;
  lastName: string;
  email: string;
}

const USERS = [
  {
    id: '36088aaf-84b1-4c96-b2a1-905c1ed42494', 
    name: 'John',
    lastName: 'Doe',
    email: 'john.doe@nan-labs.io',
  },
  {
    id: '36088aaf-84b1-4c96-b2a1-905c1ed42495', 
    name: 'Jane',
    lastName: 'Doe',
    email: 'john.doe@nan-labs.io',
  },
]

export const db = {
  user: {
    create: ({ data }: { data: DbUser }) => {
      USERS.push(data)
      return data
    },
    findMany: () => USERS,
    findById: (id: string) => USERS.find(user => user.id === id),
    update: (id: string, data: DbUser) => {
      const userIndex = USERS.findIndex(user => user.id === id)
      USERS[userIndex] = data
      return data
    }
  },
}
