import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

import authHelpers from './_helpers'
import init from './passport'
import knex from '../db/knex'

const options = {}

init()

passport.use(new LocalStrategy(options, (username, password, done) => {
  // check to see if the username exists
  knex('users').where({ username }).first()
  .then((user) => {
    if (!user) return done(null, false)

    if (!authHelpers.comparePass(password, user.password)) {
      return done(null, false)
    }

    return done(null, user)
  })
  .catch(err => done(err))
}))

module.exports = passport
