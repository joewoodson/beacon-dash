// @flow
import passport from './auth/local'

import authHelpers from './auth/_helpers'
import {
  homePage,
  helloPage,
  helloAsyncPage,
  helloEndpoint,
} from './controller'
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  helloEndpointRoute,
  LOGIN_USER_ROUTE,
  REGISTER_USER_ROUTE,
} from '../shared/routes'

import renderApp from './render-app'

function handleResponse(res, code, statusMsg) {
  res.status(code).json({ status: statusMsg })
}

export default (app: Object) => {
  // Page Routes
  app.get(HOME_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, homePage()))
  })

  app.get(HELLO_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, helloPage()))
  })

  app.get(HELLO_ASYNC_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, helloAsyncPage()))
  })

  app.get(helloEndpointRoute(), (req, res) => {
    res.json(helloEndpoint(req.params.num))
  })

  app.get('/500', () => {
    throw Error('Fake Internal Server Error')
  })

  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url))
  })

  // Auth Routes
  app.post(REGISTER_USER_ROUTE, (req, res, next) =>
    authHelpers.createUser(req, res)
    // eslint-disable-next-line no-unused-vars
    .then((response) => {
      // eslint-disable-next-line no-unused-vars
      passport.authenticate('local', (err, user, info) => {
        if (user) { handleResponse(res, 200, 'success') }
      })(req, res, next)
    })
    // eslint-disable-next-line no-unused-vars
    .catch(err => handleResponse(res, 500, 'error')),
  )

  app.post(LOGIN_USER_ROUTE, (req, res, next) => {
    // eslint-disable-next-line no-unused-vars
    passport.authenticate('local', (err, user, info) => {
      if (err) { handleResponse(res, 500, 'error') }
      if (!user) { handleResponse(res, 404, 'Username or password incorrect') }
      if (user) {
        req.logIn(user, () => {
          if (err) { handleResponse(res, 500, 'error') }
          handleResponse(res, 200, 'success')
        })
      }
    })(req, res, next)
  })

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
  })
}
