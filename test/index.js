const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

// Describe what you are testing
describe('site', () => {
	// Describe what should happen
	it('Should have a home page', (done) => {
		// In this case we test that the home page loads
		chai.request('localhost:3000')
			.get('/')
			.end((err, res) => {
				if (err) {
					done(err)
				}
				res.status.should.be.equal(200);
				// call done if the test completed successfully
				done()
			})
	})
})