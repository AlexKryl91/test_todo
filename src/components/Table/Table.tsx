import './Table.scss';
import { FC } from 'react';
import { IUser } from '../../types/types';
import TableItem from './TableItem';

interface IUserList {
  users: IUser[];
}

const Table: FC<IUserList> = ({ users }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>#</th>
          <th>username</th>
          <th>to-do count</th>
        </tr>
        {users.map((user) => (
          <TableItem key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
