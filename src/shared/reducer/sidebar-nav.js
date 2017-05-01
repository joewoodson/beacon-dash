// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  NAV_ACTIVATE,
} from '../action/sidebar-nav'

import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  NOT_FOUND_ROUTE,
} from '../routes'

const initialState = Immutable.fromJS({
  active: true,
  items: [
    { route: HOME_PAGE_ROUTE, label: 'Home' },
    { route: HELLO_PAGE_ROUTE, label: 'Say Hello' },
    { route: HELLO_ASYNC_PAGE_ROUTE, label: 'Say Hello Asynchronously' },
    { route: NOT_FOUND_ROUTE, label: '404 Demo' },
    { route: LOGIN_PAGE_ROUTE, label: 'Login' },
  ],
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
