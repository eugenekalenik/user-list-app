import { User } from '../types';

const BASE_URL = import.meta.env.VITE_API_URL;

const fetchUsers = async (page: number = 1, perPage = 6, delay = 1): Promise<User[]> => {
  const response = await fetch(`${BASE_URL}/users?page=${page}&per_page=${perPage}delay=${delay}`);
  const { data } = await response.json();
  return data;
};

export const api = { fetchUsers };
