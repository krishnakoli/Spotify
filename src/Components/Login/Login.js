import React from 'react';
import { loginUrl} from '../Token';
import "./login.css";
function Login() {
    return (
        <div className='Login'>
        <div className="container">
            <div className="logo">
                <img className='login_logo' src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg" alt="spotify_logo" />
            </div>
            <div className='spotify_button'>
                <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
            </div>
        </div>
        </div>
    )
}

export default Login;
