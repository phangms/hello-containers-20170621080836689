var request = require('supertest');

 
var app = require('../app.js')
  
 describe('GET /', function() {
   it('should response', function(done) {
     // The line below is the core test of our app.
     request(app).get('/').expect(res.statusCode).to.equal(200);
   });
 });
