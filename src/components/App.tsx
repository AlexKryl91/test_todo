import { useEffect, useState } from 'react';
import './App.scss';
import Table from './Table/Table';
import { IUser } from '../types/types';
import fetchUsers from '../API/FetchUsers';
import mergeData from '../utils/mergeData';
import Loader from './Loader/Loader';

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetchUsers()
      .then((data) => setUsers(mergeData(data)))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className="header">User To-Do Table</h1>
          <p className="subheader">User task table for effective planning.</p>
          <div className="table-wrapper">
            <Table users={users} />
          </div>
        </>
      )}
    </>
  );
};

export default App;
