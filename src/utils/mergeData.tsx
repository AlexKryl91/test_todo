import { ITodo, IUser } from '../types/types';

function mergeData([users, todos]: [IUser[], ITodo[]]): IUser[] {
  const countList: Record<string, number> = {};

  todos.forEach((todo) =>
    countList[todo.userId]
      ? (countList[todo.userId] += 1)
      : (countList[todo.userId] = 1)
  );

  users.forEach((user) => (user.count = countList[user.id]));

  return users;
}

export default mergeData;
