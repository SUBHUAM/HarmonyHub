import axios from 'axios';

const authendpoint= "https://accounts.spotify.com/authorize?"
const clientid="327f167f51c547a1b897caf1b842f79d"
const redirecturi="http://localhost:3000/"
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authendpoint}client_id=${clientid}&redirect_uri=${redirecturi}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

  const apiclient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
  });

  export const setclientToken=(token)=>{
    apiclient.interceptors.request.use(async function(config){
       config.headers.Authorization="Bearer "+token
       return config;
    })
  }



  export default apiclient ;