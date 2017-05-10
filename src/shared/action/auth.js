// @flow
import axios from 'axios'
import { createAction } from 'redux-actions'
import { LOGOUT_USER_ROUTE, LOGIN_USER_ROUTE } from '../../shared/routes'

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'

export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE'

export const loginUserRequest = createAction(LOGIN_USER_REQUEST)
export const loginUserSuccess = createAction(LOGIN_USER_SUCCESS)
export const loginUserFailure = createAction(LOGIN_USER_FAILURE)

export const logoutUserRequest = createAction(LOGOUT_USER_REQUEST)
export const logoutUserSuccess = createAction(LOGOUT_USER_SUCCESS)
export const logoutUserFailure = createAction(LOGOUT_USER_FAILURE)

export const loginUser = (username: string, password: string) => (dispatch: Function) => {
  dispatch(loginUserRequest())
  return axios.post(LOGIN_USER_ROUTE, {
    username,
    password,
  })
    .then((res) => {
      if (res.status !== 200) throw Error(res.statusText)
      // return res.json()
    })
    .then(() => {
      dispatch(loginUserSuccess())
    })
    .catch(() => {
      dispatch(loginUserFailure())
    })
}

export const logoutUser = () => (dispatch: Function) => {
  dispatch(logoutUserRequest())
  return axios.get(LOGOUT_USER_ROUTE)
    .then((res) => {
      if (res.status !== 200) throw Error(res.statusText)
      // return res.json()
    })
    .then(() => {
      dispatch(logoutUserSuccess())
    })
    .catch(() => {
      dispatch(logoutUserFailure())
    })
}
