// @flow

import Immutable from 'immutable'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import helloReducer from '../shared/reducer/hello'
import navReducer from '../shared/reducer/sidebar-nav'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.hello) {
    // flow-disable-next-line
    preloadedState.hello = helloReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.hello))
  }

  if (plainPartialState && plainPartialState.nav) {
    // flow-disable-next-line
    preloadedState.nav = navReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.nav))
  }

  return createStore(combineReducers({ hello: helloReducer, nav: navReducer }),
    preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
