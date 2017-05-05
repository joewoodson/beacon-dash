// @flow
import 'isomorphic-fetch'

import { browserHistory } from 'react-router'
import { createAction } from 'redux-actions'
import { LOGOUT_USER_ROUTE } from '../../shared/routes'

export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE'

export const logoutUserRequest = createAction(LOGOUT_USER_REQUEST)
export const logoutUserSuccess = createAction(LOGOUT_USER_SUCCESS)
export const logoutUserFailure = createAction(LOGOUT_USER_FAILURE)

export const logoutUser = () => (dispatch: Function) => {
  dispatch(logoutUserRequest())
  return fetch(LOGOUT_USER_ROUTE, { method: 'GET' })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then(() => {
      dispatch(logoutUserSuccess())
      browserHistory.push('/login')
    })
    .catch(() => {
      dispatch(logoutUserFailure())
    })
}
