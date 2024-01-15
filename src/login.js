import { loginEndpoint } from "./spotify"
import logos from './musix-logo.png'

export default function Login(){

return(
<div style={{"text-align":'center'}}>

<img src={logos} style={{"height":'30%', "width":'30%' ,"margin":'auto',"margin-top":'150px'}}></img>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
<a className='text-3xl ' href={loginEndpoint}>Log In</a>

</button>

</div>

)


} 