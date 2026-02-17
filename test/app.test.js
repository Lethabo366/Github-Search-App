let request = require('request');

// Below function will run a test to test whether the calculator is calculating the correct cost
describe('Testing Server', function() {
 let expect;

  before(async () => {
    const chai = await import('chai');
    expect = chai.expect;
  });

it('Testing fetching User Data', function(done) {
request.get(
    'http://localhost:8080/search?username=Lethabo366',
function(error, response, body) {
  if(error) return done(error);
    const json = JSON.parse(body);
expect(json.items[0].login).to.equal('Lethabo366');
done();
});
})

it('Testing fetching Repo Data', function(done) {
request.get(
    'http://localhost:8080/search/repos?username=Lethabo366',
function(error, response, body) {
  if(error) return done(error);
    const json = JSON.parse(body);
expect(json[0].name).to.equal('Hangman-Game');
done();
});
})
})