// @flow

// Page routes
export const HOME_PAGE_ROUTE = '/home'
export const HELLO_PAGE_ROUTE = '/hello'
export const HELLO_ASYNC_PAGE_ROUTE = '/hello-async'
export const LOGIN_PAGE_ROUTE = '/login'
export const NOT_FOUND_ROUTE = '/404'

export const helloEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`

// Auth routes
export const REGISTER_USER_ROUTE = '/auth/register'
export const LOGIN_USER_ROUTE = '/auth/login'
export const LOGOUT_USER_ROUTE = '/auth/logout'

// Usesr routes
export const USER_ROUTE = '/user'
