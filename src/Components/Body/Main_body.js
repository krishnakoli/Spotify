import React from 'react'
import './Main_body.css';
import { useDatalayervalue } from '../../datalayer';

function Main_body() {
  // eslint-disable-next-line
  const [{dailyactivity},dispatch]=useDatalayervalue();

  return (
    <div className='spotify_mainbody'>
        <img src={dailyactivity?.images[0].url} alt ='Weekly Activity'/>
        <div className='spotify_info'>
            <h6>PLAYLIST</h6>
            <h1> Discover Weekly</h1>
            <p>{dailyactivity?.description}</p>
        </div>
    </div>
  )
}

export default Main_body;
