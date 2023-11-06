import React from 'react';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './Header.css';
import { useDatalayervalue } from '../../datalayer';
function Header() {
  // eslint-disable-next-line
  const [{userimage},dispatch]=useDatalayervalue();
  console.log(userimage);
  return (
    <div className='header'>
        <div className='header_left'>
            <SearchSharpIcon fontSize='medium'/>
            <input className="no-outline" type="text" placeholder='Search for Artists,Songs or Podcasts' />
        </div>
        <div className='header_right'>
        <NotificationsNoneIcon id='alert' fontSize="large"/>
        {/* < AccountCircleIcon id='account'  fontSize="large" style={{margin:"0px 20px"}}/> */}
        <div className='profile'>
        <img className='profile_img' id='account' src={userimage} alt='Profile_photo' />
        </div>
        </div>
    </div>
  )
}

export default Header;