import './App.css'
import { Login } from './components/Login'
import Spotify from './components/Spotify'
import { CheckToken } from './utils/TokenUtils'

function App() {
  let token = CheckToken()

  return <div>{token ? <Spotify /> : <Login />}</div>
}

export default App
