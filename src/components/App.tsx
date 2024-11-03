import { useEffect, useState } from 'react';
import './App.scss';
import Table from './Table/Table';
import { IUser } from '../types/types';

const App = () => {
  const usersURL = 'https://jsonplaceholder.typicode.com/users';
  const todosURL = 'https://jsonplaceholder.typicode.com/users';

  // const [users, setUsers] = useState<IUser[]>([]);
  // useEffect(() => {
  //   fetchUsers(usersURL);
  // }, []);

  // async function fetchUsers(url: string) {
  //   try {
  //     const response = await fetch(url)
  //       .then((data) => {
  //         data.json();
  //       })
  //       .then((data) => console.log(data));
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  const testUserList = [
    {
      id: 1,
      username: 'nickname',
      name: 'Ethan Mitchell',
      email: 'ethan.mitchell24@email.com',
      count: 4,
    },
    {
      id: 2,
      username: 'nickname',
      name: 'John Doe',
      email: 'example@email.com',
      count: 5,
    },
    {
      id: 3,
      username: 'nickname',
      name: 'John Doe',
      email: 'example@email.com',
      count: 7,
    },
    {
      id: 4,
      username: 'nickname',
      name: 'John Doe',
      email: 'example@email.com',
      count: 7,
    },
    {
      id: 5,
      username: 'nickname',
      name: 'John Doe',
      email: 'example@email.com',
      count: 7,
    },
    {
      id: 6,
      username: 'nickname',
      name: 'John Doe',
      email: 'example@email.com',
      count: 7,
    },
    {
      id: 7,
      username: 'nickname',
      name: 'John Doe',
      email: 'example@email.com',
      count: 7,
    },
    {
      id: 8,
      username: 'nickname',
      name: 'John Doe',
      email: 'example@email.com',
      count: 7,
    },
    {
      id: 9,
      username: 'nickname',
      name: 'John Doe',
      email: 'example@email.com',
      count: 7,
    },
    {
      id: 10,
      username: 'nickname',
      name: 'John Doe',
      email: 'example@email.com',
      count: 7,
    },
  ];

  return (
    <>
      <h1 className="header">User To-Do Table</h1>
      <p className="subheader">User task table for effective planning.</p>
      <div className="table-wrapper">
        <Table users={testUserList} />
      </div>
    </>
  );
};

export default App;
