import '../styles/Login.css';
import {Config} from '../utils/Config';

export function Login() {

	const OnLoginClick = ()=>{
		let url= `${Config.api_uri}?client_id=${Config.client_id}&redirect_uri=${Config.redirect_uri}&scope=${Config.scope.join(
			" "
		)}&response_type=token&show_dialog=true`;

		window.location.href = url;
	}

  return (
    <div>
			<img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black-768x230.png" alt="Spotify Clone App" />
			<button className="login__button" onClick={OnLoginClick}>Connect to Spotify</button>
		</div>
  );
}

export default Login; 
