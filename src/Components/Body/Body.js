import React from 'react'
import './Body.css';
import Header from './Header';
import Mainbody from './Main_body';
import Rawsong from './Rawsong';
import { useDatalayervalue } from '../../datalayer';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function Body({spotify}) {
  // eslint-disable-next-line
  const [{dailyactivity},dispatch]=useDatalayervalue();
  return (
    <div className='spotify_body'>
      <Header spotify={spotify}/>
      <Mainbody spotify={spotify}/>
      <div className='body_header'>
      <PlayCircleFilledIcon className='body_play' style={{ fontSize: 50 }}/>
      <FavoriteSharpIcon className='liked'/>
      <MoreHorizIcon className='dotdotdot'/>  
      <div className='Spotify_song'>
          <div className='raw_song'>
            {dailyactivity?.tracks.items.map(song=>{
              return <Rawsong song={song}/>
            })}
          </div>
        </div>
    </div>
    </div>
)
}

export default Body;
