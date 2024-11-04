import { useEffect, useState } from 'react';
import './App.scss';
import Table from './Table/Table';
import { IUser } from '../types/types';
import fetchData from '../API/fetchData';
import mergeData from '../utils/mergeData';
import Loader from './Loader/Loader';
import errorHandler from '../utils/errorHandler';

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetchData()
      .then((data) => {
        setUsers(mergeData(data));
        setIsLoading(false);
      })
      .catch((err) => errorHandler(err));
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
