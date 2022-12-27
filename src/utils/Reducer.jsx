import { reducerCases } from './Constants'

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      }
  }
}

export default reducer
