const bcrypt = require('bcryptjs')

exports.seed = (knex, Promise) =>
  knex('users').del()
  .then(() => {
    const salt = bcrypt.genSaltSync()
    const hash = bcrypt.hashSync('test', salt)
    return Promise.join(
      knex('users').insert({
        username: 'joe',
        password: hash,
      }),
    )
  })
