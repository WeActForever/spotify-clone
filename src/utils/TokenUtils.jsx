import { useEffect } from 'react'
import { Config } from './Config'
import { reducerCases } from './Constants'
import { useStateProvider } from './StateProvider'

export function GetToken() {
  const hash = window.location.hash

  if (hash) {
    const token = hash.substring(1).split('&')[0].split('=')[1]
    return token
  }

  return ''
}

export function CheckToken() {
  const [{ token }, dispatch] = useStateProvider()

  useEffect(() => {
    let token = GetToken()
    if (token) {
      dispatch({ type: reducerCases.SET_TOKEN, token })
    }

    document.title = 'Welcome to Spotify'
  }, [dispatch, token])

  return token
}

export function GotoLogin() {
  let url = `${Config.api_uri}?client_id=${Config.client_id}&redirect_uri=${
    Config.redirect_uri
  }&scope=${Config.scope.join(' ')}&response_type=token&show_dialog=true`

  window.location.href = url
}
