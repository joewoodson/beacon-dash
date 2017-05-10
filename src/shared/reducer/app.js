// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from '../action/auth'

const initialState = Immutable.fromJS({
  isAuth: false,
})

const appReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return state
    case LOGIN_USER_SUCCESS:
      return state.set('isAuth', true)
    case LOGIN_USER_FAILURE:
      return state
    case LOGOUT_USER_REQUEST:
      return state
    case LOGOUT_USER_SUCCESS:
      return state.set('isAuth', false)
    case LOGOUT_USER_FAILURE:
      return state
    default:
      return state
  }
}

export default appReducer
