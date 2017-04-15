import chai from 'chai'
import chaiImmutable from 'chai-immutable'

// import {
//   sayHello,
//   sayHelloAsyncRequest,
//   sayHelloAsyncSuccess,
//   sayHelloAsyncFailure,
// } from '../src/shared/action/hello'

import helloReducer from '../src/shared/reducer/hello'

let helloState

beforeEach(() => {
  helloState = helloReducer(undefined, {})
})

chai.use(chaiImmutable)
chai.should()

describe('Reducers', () => {
  describe('Hello reducer default', () => {
    it('should have prop message with value Initial reducer message', () => {
      helloState.should.be.an('object')
      helloState.should.have.property('message', 'Initial reducer message')
    })
  })
})
