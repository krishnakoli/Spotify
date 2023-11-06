import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import './Player.css';

function Player({ spotify }) {
    return (
            <div className='Player'>
            <div className='Player_body'>
                <Sidebar />
                <Body spotify={spotify}/>
                </div>
                <Footer/>
        </div>
    )
}

export default Player;
