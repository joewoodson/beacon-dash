
import chai from 'chai'
import chaiHttp from 'chai-http'

import knex from '../src/server/db/knex'
import server from '../src/server/index'

process.env.NODE_ENV = 'test'

const should = chai.should()
chai.use(chaiHttp)

describe('routes : auth', () => {
  beforeEach(() =>
    knex.migrate.rollback()
    .then(() => knex.migrate.latest()),
  )

  afterEach(() =>
    knex.migrate.rollback(),
  )

  describe('POST /auth/register', () => {
    it('should register a new user', (done) => {
      chai.request(server)
      .post('/auth/register')
      .send({
        username: 'joe',
        password: 'test',
      })
      .end((err, res) => {
        should.not.exist(err)
        res.redirects.length.should.eql(0)
        res.status.should.eql(200)
        res.type.should.eql('application/json')
        res.body.status.should.eql('success')
        done()
      })
    })
  })
})
