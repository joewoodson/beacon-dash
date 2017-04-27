// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  NAV_ACTIVATE,
} from '../action/sidebar-nav'

const initialState = Immutable.fromJS({
  active: true,
})

const navReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case NAV_ACTIVATE:
      return state.set('active', action.payload)
    default:
      return state
  }
}

export default navReducer
