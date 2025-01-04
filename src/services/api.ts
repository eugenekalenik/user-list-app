import { User } from '../types';

const BASE_URL = import.meta.env.VITE_API_URL;

const fetchUsers = async (page: number = 1, perPage = 6, delay = 3): Promise<User[]> => {
  const url = `${BASE_URL}/users?page=${page}&delay=${delay}&per_page=${perPage}`;
  const response = await fetch(url);
  const { data } = await response.json();
  return data;
};

export const api = { fetchUsers };
