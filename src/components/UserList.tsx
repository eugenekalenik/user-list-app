import { useEffect, useState } from 'react';
import { User } from '../types';
import { api } from '../services/api';
import { UserListItem } from './UserListItem';
import './UserList.css';

type UserListProps = {
  onSelectUser: (user: User) => void;
};

export const UserList = ({ onSelectUser }: UserListProps) => {
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const newUsers = await api.fetchUsers(page);
        setUsers((prev) => [...prev, ...newUsers]);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Error loading users';
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };
    loadUsers();
  }, [page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="user-list-wrapper">
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      <ul className="user-list">
        {users.map((user) => (
          <UserListItem key={user.id} user={user} onSelect={onSelectUser} />
        ))}
      </ul>
      {page < 2 && <button onClick={loadMore}>Load More</button>}
    </div>
  );
};
