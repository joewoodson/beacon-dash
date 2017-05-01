
import chai from 'chai'
import chaiHttp from 'chai-http'
import passportStub from 'passport-stub'

import knex from '../src/server/db/knex'
import server from '../src/server/index'

process.env.NODE_ENV = 'test'

const should = chai.should()
chai.use(chaiHttp)
passportStub.install(server)

describe('Routes : Auth', () => {
  beforeEach(() =>
    knex.migrate.latest()
    .then(() => knex.seed.run()),
  )

  afterEach(() =>
    passportStub.logout(),
  )

  describe('POST /auth/register', () => {
    it('should register a new user', (done) => {
      chai.request(server)
      .post('/auth/register')
      .send({
        username: 'john',
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

    it('should throw an error if a user is logged in', (done) => {
      passportStub.login({
        username: 'joe',
        password: 'test',
      })
      chai.request(server)
      .post('/auth/register')
      .send({
        username: 'john',
        password: 'test',
      })
      .end((err, res) => {
        should.exist(err)
        res.redirects.length.should.eql(0)
        res.status.should.eql(401)
        res.type.should.eql('application/json')
        res.body.status.should.eql('You are already logged in')
        done()
      })
    })
  })

  describe('POST /auth/login', () => {
    it('should login a user', (done) => {
      chai.request(server)
      .post('/auth/login')
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

    it('should not login an unregistered user', (done) => {
      chai.request(server)
      .post('/auth/login')
      .send({
        username: 'jim',
        password: 'test',
      })
      .end((err, res) => {
        should.exist(err)
        res.redirects.length.should.eql(0)
        res.status.should.eql(404)
        res.type.should.eql('application/json')
        res.body.status.should.eql('Username or password incorrect')
        done()
      })
    })

    it('should not login a user with the incorrect password', (done) => {
      chai.request(server)
      .post('/auth/login')
      .send({
        username: 'joe',
        password: 'wrongpass',
      })
      .end((err, res) => {
        should.exist(err)
        res.redirects.length.should.eql(0)
        res.status.should.eql(404)
        res.type.should.eql('application/json')
        res.body.status.should.eql('Username or password incorrect')
        done()
      })
    })

    it('should throw an error if a user is logged in', (done) => {
      passportStub.login({
        username: 'joe',
        password: 'test',
      })
      chai.request(server)
      .post('/auth/login')
      .send({
        username: 'joe',
        password: 'test',
      })
      .end((err, res) => {
        should.exist(err)
        res.redirects.length.should.eql(0)
        res.status.should.eql(401)
        res.type.should.eql('application/json')
        res.body.status.should.eql('You are already logged in')
        done()
      })
    })
  })

  describe('GET /auth/logout', () => {
    it('should logout a user', (done) => {
      passportStub.login({
        username: 'joe',
        password: 'test',
      })
      chai.request(server)
      .get('/auth/logout')
      .end((err, res) => {
        should.not.exist(err)
        res.redirects.length.should.eql(0)
        res.status.should.eql(200)
        res.type.should.eql('application/json')
        res.body.status.should.eql('success')
        done()
      })
    })

    it('should throw an error if a user is not logged in', (done) => {
      chai.request(server)
      .get('/auth/logout')
      .end((err, res) => {
        should.exist(err)
        res.redirects.length.should.eql(0)
        res.status.should.eql(401)
        res.type.should.eql('application/json')
        res.body.status.should.eql('Not currently logged in')
        done()
      })
    })
  })

  describe('GET /user', () => {
    it('should return a success', (done) => {
      passportStub.login({
        username: 'joe',
        password: 'test',
      })
      chai.request(server)
      .get('/user')
      .end((err, res) => {
        should.not.exist(err)
        res.redirects.length.should.eql(0)
        res.status.should.eql(200)
        res.type.should.eql('application/json')
        res.body.status.should.eql('success')
        done()
      })
    })
    it('should throw an error if a user is not logged in', (done) => {
      chai.request(server)
      .get('/user')
      .end((err, res) => {
        should.exist(err)
        res.redirects.length.should.eql(0)
        res.status.should.eql(401)
        res.type.should.eql('application/json')
        res.body.status.should.eql('Not currently logged in')
        done()
      })
    })
  })
})
