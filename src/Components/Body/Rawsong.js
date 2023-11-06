import React from 'react';
import './Rawsong.css';
function Rawsong({song}) {
  return (
    <>
    <div className='song'>
        <img src={song.track.album.images[0].url} alt=''/>
        <div className='song_info'>
            <h6> {song.track.name}</h6>
            <p>{song.track.artists[0].name}</p>
        </div>
    </div>
    </>
  )
}

export default Rawsong
