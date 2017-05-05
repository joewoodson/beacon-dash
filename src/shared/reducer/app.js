// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
} from '../action/auth'

const initialState = Immutable.fromJS({
  isAuth: false,
})

const appReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
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
