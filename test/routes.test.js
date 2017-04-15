import chai from 'chai'
import chaiHttp from 'chai-http'
// var server = require('../index')
// var knex = require('../db/knex')

import { helloEndpointRoute } from '../src/shared/routes'

// const chai = require('chai')

chai.should()
chai.use(chaiHttp)

describe('API Routes', () => {
  // beforeEach(function(done) {
  //  knex.migrate.rollback()
  //  .then(function() {
  //    knex.migrate.latest()
  //    .then(function() {
  //      return knex.seed.run()
  //      .then(function() {
  //        done()
  //      })
  //    })
  //  })
  // })
  //
  // afterEach(function(done) {
  //   return knex.seed.run()
  //   .then(function() {
  //     done()
  //   })
  // })

  describe('helloEndpointRoute', () => {
    it('should return ajax/hello/:num when called with no arguments', () => {
      helloEndpointRoute().should.equal('/ajax/hello/:num')
    })

    it('should return ajax/hello/13 when passed 13', () => {
      helloEndpointRoute(13).should.equal('/ajax/hello/13')
    })
  })

  // describe('GET /shows', () => {
  //   it('should return all shows', (done) => {
  //     chai.request(server)
  //     .get('/shows')
  //     .end(function(err, res) {
  //       res.should.have.status(200)
  //       res.should.be.json // jshint ignore:line
  //       res.body.should.be.a('array')
  //       res.body.length.should.equal(4)
  //       res.body[0].should.have.property('name')
  //       res.body[0].name.should.equal('Suits')
  //       res.body[0].should.have.property('channel')
  //       res.body[0].channel.should.equal('USA Network')
  //       res.body[0].should.have.property('genre')
  //       res.body[0].genre.should.equal('Drama')
  //       res.body[0].should.have.property('rating')
  //       res.body[0].rating.should.equal(3)
  //       res.body[0].should.have.property('explicit')
  //       res.body[0].explicit.should.equal(false)
  //       done()
  //     })
  //   })
  // })

  // describe('GET /show/:id', function() {
  //   it('should return a single show', function(done) {
  //     chai.request(server)
  //     .get('/show/3')
  //     .end(function(err, res) {
  //       res.should.have.status(200)
  //       res.should.be.json // jshint ignore:line
  //       res.body.should.be.a('object')
  //       res.body.should.have.property('name')
  //       res.body.name.should.equal('South Park')
  //       done()
  //     })
  //   })
  // })

//   describe('POST /shows', function() {
//     it('should add a show', function(done) {
//       chai.request(server)
//       .post('/shows')
//       .send({
//         name: 'Twin Peaks',
//         channel : 'HBO',
//         genre: 'Drama',
//         rating: 5,
//         explicit: true
//     })
//     .end(function(err, res) {
//       res.should.have.status(200)
//       res.should.be.json // jshint ignore:line
//       res.body.should.be.a('object')
//       res.body.should.have.property('name')
//       res.body.name.should.equal('Twin Peaks')
//       res.body.should.have.property('channel')
//       res.body.channel.should.equal('HBO')
//       res.body.should.have.property('genre')
//       res.body.genre.should.equal('Drama')
//       res.body.should.have.property('rating')
//       res.body.rating.should.equal(5)
//       res.body.should.have.property('explicit')
//       res.body.explicit.should.equal(true)
//       done()
//     })
//   })
//   })
//
//   describe('PUT /shows/:id', function() {
//   it('should update a show', function(done) {
//     chai.request(server)
//     .put('/shows/1')
//     .send({
//       rating: 4,
//       explicit: true
//     })
//     .end(function(err, res) {
//       res.should.have.status(200)
//       res.should.be.json // jshint ignore:line
//       res.body.should.be.a('object')
//       res.body.should.have.property('name')
//       res.body.name.should.equal('Suits')
//       res.body.should.have.property('channel')
//       res.body.channel.should.equal('USA Network')
//       res.body.should.have.property('genre')
//       res.body.genre.should.equal('Drama')
//       res.body.should.have.property('rating')
//       res.body.rating.should.equal(4)
//       res.body.should.have.property('explicit')
//       res.body.explicit.should.equal(true)
//       done()
//     })
//   })
//
//   it('should NOT update a show if the id field is part of the request', function(done) {
//     chai.request(server)
//     .put('/shows/1')
//     .send({
//       id: 20,
//       rating: 4,
//       explicit: true
//     })
//     .end(function(err, res) {
//       res.should.have.status(422)
//       res.should.be.json // jshint ignore:line
//       res.body.should.be.a('object')
//       res.body.should.have.property('error')
//       res.body.error.should.equal('You cannot update the ID field')
//       done()
//     })
//   })
// })
//
// describe('DELETE /shows/:id', function() {
//   it('should delete a show', function(done) {
//     chai.request(server)
//     .delete('/shows/1')
//     .end(function(error, response) {
//       response.should.have.status(200)
//       response.should.be.json // jshint ignore:line
//       response.body.should.be.a('object')
//       response.body.should.have.property('name')
//       response.body.name.should.equal('Suits')
//       response.body.should.have.property('channel')
//       response.body.channel.should.equal('USA Network')
//       response.body.should.have.property('genre')
//       response.body.genre.should.equal('Drama')
//       response.body.should.have.property('rating')
//       response.body.rating.should.equal(3)
//       response.body.should.have.property('explicit')
//       response.body.explicit.should.equal(false)
//       chai.request(server)
//       .get('/shows')
//       .end(function(err, res) {
//         res.should.have.status(200)
//         res.should.be.json // jshint ignore:line
//         res.body.should.be.a('array')
//         res.body.length.should.equal(3)
//         res.body[0].should.have.property('name')
//         res.body[0].name.should.equal('Game of Thrones')
//         res.body[0].should.have.property('channel')
//         res.body[0].channel.should.equal('HBO')
//         res.body[0].should.have.property('genre')
//         res.body[0].genre.should.equal('Fantasy')
//         res.body[0].should.have.property('rating')
//         res.body[0].rating.should.equal(5)
//         res.body[0].should.have.property('explicit')
//         res.body[0].explicit.should.equal(true)
//         done()
//       })
//     })
//   })
// })
})