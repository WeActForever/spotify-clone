import '../styles/Login.css'
import { GotoLogin } from '../utils/TokenUtils'
export function Login() {
  const OnLoginClick = () => {
    GotoLogin()
  }

  return (
    <div className="login__container">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black-768x230.png"
        alt="Spotify Clone App"
        className="login_logo"
      />
      <button className="login__button" onClick={OnLoginClick}>
        Connect to Spotify
      </button>
    </div>
  )
}

export default Login
