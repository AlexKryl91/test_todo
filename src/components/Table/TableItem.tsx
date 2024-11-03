import UserIcon from '../../assets/img/user.svg';
import { FC } from 'react';
import { IUser } from '../../types/types';

interface IUserItem {
  user: IUser;
}

const TableItem: FC<IUserItem> = ({ user }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>
        <div className="user">
          <img
            className="user__icon"
            src={UserIcon}
            alt={user.username}
            width={'40px'}
            height={'40px'}
          />
          <div>
            <div className="user__name">{user.name}</div>
            <a className="user__email" href={`mailto:${user.email}`}>
              {user.email}
            </a>
          </div>
        </div>
      </td>
      <td>{user.count}</td>
    </tr>
  );
};

export default TableItem;
