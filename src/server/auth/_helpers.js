import bcrypt from 'bcryptjs'
import knex from '../db/knex'

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword)
}

function createUser(req) {
  const salt = bcrypt.genSaltSync()
  const hash = bcrypt.hashSync(req.body.password, salt)
  return knex('users')
  .insert({
    username: req.body.username,
    password: hash,
  })
  .returning('*')
}

function loginRedirect(req, res, next) {
  if (req.user) {
    return res.status(401).json(
      { status: 'You are already logged in' },
    )
  }
  return next()
}

function loginRequired(req, res, next) {
  if (!req.user) return res.status(401).json({ status: 'Not currently logged in' })
  return next()
}

module.exports = {
  comparePass,
  createUser,
  loginRedirect,
  loginRequired,
}
