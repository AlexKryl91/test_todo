import { ITodo, IUser } from '../types/types';
import controlledFetch from './controlledFetch';

async function fetchUsers(): Promise<IUser[]> {
  const response = await controlledFetch(
    'https://jsonplaceholder.typicode.com/users'
  );
  return await response.json();
}

async function fetchTodo(): Promise<ITodo[]> {
  const response = await controlledFetch(
    'https://jsonplaceholder.typicode.com/todos'
  );
  return await response.json();
}

async function fetchData() {
  // const urls = [
  //   'https://jsonplaceholder.typicode.com/users',
  //   'https://jsonplaceholder.typicode.com/todos',
  // ];

  // const requests = urls.map((url) => fetch(url).then((data) => data.json()));
  // return await Promise.all(requests).catch((err) => alert(err));

  return await Promise.all([fetchUsers(), fetchTodo()]);
}

export default fetchData;
