import chai from 'chai'
import chaiHttp from 'chai-http'

import server from '../src/server/index'

chai.use(chaiHttp)

describe('Routes : Pages', () => {
  describe('Get /home', () => {
    it('should serve the Home page', (done) => {
      chai.request(server)
      .get('/home')
      .end((err, res) => {
        res.redirects.length.should.eql(0)
        res.status.should.eql(200)
        res.type.should.eql('text/html')
        done()
      })
    })
  })
})
