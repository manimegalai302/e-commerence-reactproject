import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth';

const Profile = () => {
    const auth=useAuth();
    let navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate('/login');
    }
  return (
    <div className='Profile'>
    <h3>welcome {auth.user}</h3>
    <button id="logout" onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Profile;
