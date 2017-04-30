// @flow

import bodyParser from 'body-parser'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import express from 'express'
import flash from 'express-flash'
import passport from 'passport'

import { Server } from 'http'
import session from 'express-session'

import routing from './routing'
import { WEB_PORT, STATIC_PATH } from '../shared/config'
import { isProd } from '../shared/util'

require('dotenv').config()

const path = require('path')

const app = express()
// flow-disable-next-line
const http = Server(app)

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

// config for passport authentication
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// uncomment if using express-session
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use(express.static(path.join(__dirname, '..', '..', 'client')))

routing(app)

http.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
    '(development).\nKeep "yarn dev:wds" running in an other terminal'}.`)
})

module.exports = app
