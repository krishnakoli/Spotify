 import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { useDatalayervalue } from '../../datalayer';
// import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';


function Sidebar() {
   // eslint-disable-next-line
  const [{playlist},dispatch]=useDatalayervalue();

  return (
    <div className='Sidebar'> 
      <img className='sidebar_logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoA3f_RyUwqI5q2bwZ10x5GeSgbHqM5u2xk50v1zFtRELsVumzk7DKpJKqNca0eT2_cvo&usqp=CAU" alt="Spotify_Sidebarlogo" />  
      <SidebarOption key={'1'} title="Home" Icon={HomeIcon} />
      <SidebarOption key={'2'} title="Search" Icon={SearchIcon} />
      <SidebarOption key={'3'} title="Your Library" Icon={LibraryMusicIcon}/>
      <div className='playlist'>
      <SidebarOption key={'4'} id='playlist' title="PlayLists" /></div>
      <SidebarOption key={'5'} title="Create Playlist" Icon={AddBoxIcon}/>
      <SidebarOption key={'6'} title="Liked Songs" Icon={FavoriteSharpIcon}/>
      <hr/>
      {playlist.map(element =>  <SidebarOption title={element} />)}

    </div>
  )
}

export default Sidebar;
