import { useEffect, useState } from 'react';
import { User } from '../types';
import { api } from '../services/api';

export const useUsers = (page: number) => {
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      setIsLoading(true);
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

  return {
    error,
    isLoading,
    users,
  };
};
