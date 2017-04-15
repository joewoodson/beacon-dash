import chai from 'chai'
import chaiImmutable from 'chai-immutable'

import {
  sayHello,
  sayHelloAsyncRequest,
  sayHelloAsyncSuccess,
  sayHelloAsyncFailure,
} from '../src/shared/action/hello'

import helloReducer from '../src/shared/reducer/hello'

let helloState

beforeEach(() => {
  helloState = helloReducer(undefined, {})
})

chai.use(chaiImmutable)
chai.should()

describe('Reducers', () => {
  describe('Hello Reducer', () => {
    describe('handle default', () => {
      it('should have prop message with value Initial reducer message', () => {
        helloState.should.be.an('object')
        helloState.should.have.property('message', 'Initial reducer message')
      })
      it('should have prop messageAsync with value Initial reducer message for async call', () => {
        helloState.should.have.property('messageAsync', 'Initial reducer message for async call')
      })
    })

    describe('handle SAY_HELLO', () => {
      it('should update message', () => {
        helloState = helloReducer(helloState, sayHello('Yo!'))
        helloState.should.be.an('object')
        helloState.should.have.property('message', 'Yo!')
      })
    })

    describe('handle SAY_HELLO_ASYNC_REQUEST', () => {
      it('should update messageAsync with "loading..."', () => {
        helloState = helloReducer(helloState, sayHelloAsyncRequest())
        helloState.should.be.an('object')
        helloState.should.have.property('messageAsync', 'Loading...')
      })
    })

    describe('handle SAY_HELLO_ASYNC_SUCCESS', () => {
      it('should update messageAsync', () => {
        helloState = helloReducer(helloState, sayHelloAsyncSuccess('Testing'))
        helloState.should.be.an('object')
        helloState.should.have.property('messageAsync', 'Testing')
      })
    })

    describe('handle SAY_HELLO_ASYNC_FAILURE', () => {
      it('should update messageAsync with "No message received, please check your connection"', () => {
        helloState = helloReducer(helloState, sayHelloAsyncFailure())
        helloState.should.be.an('object')
        helloState.should.have.property('messageAsync', 'No message received, please check your connection')
      })
    })
  })
})
