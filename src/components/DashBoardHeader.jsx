import React from 'react'
import '../styles/DashBoardHeader.css'
import BellIcon from '../assets/icons/bell-icon.png'
import UserIcon from '../assets/icons/user-icon.png'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function DashBoardHeader() {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      navigate('/');
    }).catch((error) => {
      console.error(error);
    });
  };
  let userProfilePhoto = localStorage.getItem('userProfilePhoto');
  if (userProfilePhoto === null) {
    userProfilePhoto = UserIcon;
  }
  return (
    <div className='header-container'>
      <span className="header-heading">
        Upload CSV
      </span>
      <div className="icon-group">
        <img src={BellIcon} alt="bell-icon" className="bell-icon icon" />
        <img src={userProfilePhoto} alt="user" className="user-icon icon" onClick={() => handleSignOut()} />
      </div>
    </div>
  )
}

export default DashBoardHeader