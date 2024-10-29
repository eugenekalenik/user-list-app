import { useState } from 'react';
import { User } from '../types';
import { UserListItem } from './UserListItem';
import { useUsers } from '../hooks/useUsers';
import './UserList.css';

type UserListProps = {
  onSelectUser: (user: User) => void;
};

export const UserList = ({ onSelectUser }: UserListProps) => {
  const [page, setPage] = useState(1);
  const { users, error, isLoading } = useUsers(page);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="user-list-wrapper">
      {error ? (
        <p>{error}</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul className="user-list">
            {users.map((user) => (
              <UserListItem key={user.id} user={user} onSelect={onSelectUser} />
            ))}
          </ul>
          {page < 2 && <button onClick={loadMore}>Load More</button>}
        </>
      )}
    </div>
  );
};
