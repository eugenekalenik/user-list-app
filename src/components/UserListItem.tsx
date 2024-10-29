import { User } from '../types';
import './UserListItem.css';

type UserListItemProps = {
  user: User;
  onSelect: (user: User) => void;
};

export const UserListItem = ({ user, onSelect }: UserListItemProps) => (
  <li onClick={() => onSelect(user)} className="user-list-item">
    <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
    <div>
      <h3>{`${user.first_name} ${user.last_name}`}</h3>
      <p>{user.email}</p>
    </div>
  </li>
);
