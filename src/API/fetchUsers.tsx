import { ITodo, IUser } from '../types/types';

async function fetchUsers() {
  const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/todos',
  ];

  const requests = urls.map((url) => fetch(url).then((data) => data.json()));

  const promise: Promise<[IUser[], ITodo[]]> = await Promise.all(
    requests
  ).catch((err) => alert(err));

  return promise;
}

export default fetchUsers;
