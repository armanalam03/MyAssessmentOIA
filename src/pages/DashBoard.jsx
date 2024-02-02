import React, {useState} from 'react'
import HamburgerMenu from '../components/HamburgerMenu'
import Upload from '../components/Upload'
import '../styles/DashBoard.css'
import LogonCompany from '../assets/icons/logo-and-company.png'
import HamburgerIcon from '../assets/icons/hamburger-icon.png'
import BellIcon from '../assets/icons/bell-icon.png'
import UserIcon from '../assets/icons/user-icon.png'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function DashBoard() {
  const [isShown, setIsShown] = useState(false);
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

  const handleSetIsShown = () => {
    setIsShown(false);
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="header-left">
          <img src={HamburgerIcon} alt="Base" className='hamburger-menu' onClick={() => setIsShown(true)} />
          <img src={LogonCompany} alt="Base" className='logo-and-company' />
        </div>
        <div className="header-icon-group">
          <img src={BellIcon} alt="bell-icon" className="bell-icon icon" />
          <img src={userProfilePhoto} alt="user" className="user-icon icon" onClick={() => handleSignOut()} />
        </div>
      </div>
      <HamburgerMenu isShown={isShown} setIsShown={handleSetIsShown} />
      <Upload />
    </div>
    
  )
}

export default DashBoard