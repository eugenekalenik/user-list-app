import { User } from '../types';
import './UserDetails.css';

type UserDetailsProps = {
  user: User;
  onClose: () => void;
};

export const UserDetails = ({ user, onClose }: UserDetailsProps) => {
  return (
    <div className="user-details">
      <div className="user-card">
        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <p>{user.email}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
