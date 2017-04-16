import chai from 'chai'
import chaiHttp from 'chai-http'
// var server = require('../index')
// var knex = require('../db/knex')

import { helloEndpointRoute } from '../src/shared/routes'

// const chai = require('chai')

chai.should()
chai.use(chaiHttp)

describe('API Routes', () => {
  describe('helloEndpointRoute', () => {
    it('should return ajax/hello/:num when called with no arguments', () => {
      helloEndpointRoute().should.equal('/ajax/hello/:num')
    })

    it('should return ajax/hello/13 when passed 13', () => {
      helloEndpointRoute(13).should.equal('/ajax/hello/13')
    })
  })
})
