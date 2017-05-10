// @flow

import Immutable from 'immutable'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import appReducer from '../shared/reducer/app'
import helloReducer from '../shared/reducer/hello'
import navReducer from '../shared/reducer/sidebar-nav'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.app) {
    // flow-disable-next-line
    preloadedState.app = appReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.app))
  }

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

  return createStore(combineReducers({ app: appReducer, hello: helloReducer, nav: navReducer }),
    preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
