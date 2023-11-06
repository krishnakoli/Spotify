import {React,useEffect,useState} from 'react';
import Login from "./Components/Login/Login";
import { getTokenFromUrl } from './Components/Token';
import SpotifyWebApi from "spotify-web-api-js";
import { useDatalayervalue } from './datalayer';
import Player from './Components/Player';
const spotify=new SpotifyWebApi();


function App() {
const [Token,setToken]=useState(null);
//  eslint-disable-next-line 
const [{user,token,playlist},dispatch]=useDatalayervalue();

  useEffect(()=>{
      const temp=getTokenFromUrl();
      window.location.hash = "";
      const _token = temp.access_token;
      if(_token){
        console.log(_token);
        dispatch({
          type:"SET_TOKEN",
          token:_token
        });
          setToken(_token);
          spotify.setAccessToken(_token);
          spotify.getMe().then(user=>{
            dispatch({
              type:"SET_USER",
              username:user.display_name,
              userimage:user.images[0].url
            });
  
          });
          spotify.getUserPlaylists().then(playlist=>{
            dispatch({
              type:"SET_PLAYLIST",
              playlist:playlist.items.map((playlist)=>{return playlist.name })
            })
          })
          .catch(err=>console.log(err));
          spotify.getPlaylist('4RrpS16KY61e6UvDyPwdr4').then(object=>{
            dispatch({
              type:'SET_DAILYACTIVITY',
              dailyactivity:object
            });
          });

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return(
    <> 
  <div className="app">{Token ? <h1><Player spotify={spotify}/></h1> : <Login />}</div>;
  {/* <Login/> */}
  </>
);
}

export default App;
