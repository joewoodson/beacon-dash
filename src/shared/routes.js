// @flow

// Page routes
export const HOME_PAGE_ROUTE = '/home'
export const HELLO_PAGE_ROUTE = '/hello'
export const HELLO_ASYNC_PAGE_ROUTE = '/hello-async'
export const NOT_FOUND_DEMO_PAGE_ROUTE = '/404'

export const helloEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`

// Auth routes
export const REGISTER_USER_ROUTE = '/auth/register'
