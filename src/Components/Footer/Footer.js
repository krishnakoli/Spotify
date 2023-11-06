import React from 'react';
import './Footer.css';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import LoopIcon from '@mui/icons-material/Loop';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import {Slider} from '@mui/material';
function Footer() {


  return (
    <div className='footer'>

    <div className='left'>
    <div className='footer_albumphoto'>
        <img className='song_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM1Ex-IqPXMNw8JSkFf6sYLod2vhL5qhhNKg&usqp=CAU" alt="Album" />
       </div>
       <div className='footer_songdetails'>
        <h6 className='songname'> Photograph</h6>
        <h6 className='artistname'>Ed_sheeran</h6>
       </div>
    </div>


    <div className='center'>
      <div className='paybuttons'>
        <ShuffleOnIcon className='shuffle' fontSize="small"/>
        <SkipPreviousIcon className='previous' fontSize="medium"/>
        <PlayCircleFilledIcon className='play' style={{ fontSize: 50 }}/>
        <SkipNextIcon className='next' fontSize="medium"/>
        <LoopIcon className='loop' fontSize="medium" />
        </div>  
      {/* <div className='song_time'>
      <p>  I'm song time </p>
      </div> */}
    </div>


    <div className='right'>
      <QueueMusicIcon className='queue'/>      
      <VolumeUpIcon className='volumebutton' style={{margin:'10px'}}/>
      <div className='bar'>
    <Slider  size="small " defaultValue={50} aria-label="Small" valueLabelDisplay="auto"/>
    </div>
    </div>

    </div>
  )
}

export default Footer
