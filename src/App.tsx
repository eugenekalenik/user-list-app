import { useState } from 'react';
import { User } from './types';
import { UserList } from './components/UserList';
import { UserDetails } from './components/UserDetails';
import './App.css';

function App() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleUserDetailsClose = () => {
    setSelectedUser(null);
  };

  return (
    <>
      <h1>User List App</h1>
      <UserList onSelectUser={setSelectedUser} />
      <div>{selectedUser && <UserDetails user={selectedUser} onClose={handleUserDetailsClose} />}</div>
    </>
  );
}

export default App;
