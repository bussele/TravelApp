
const supertest = require('supertest'); 
const app = require('../src/server/server'); 
test("Testing if 200", async () => {    
  await supertest(app).get('/test').expect(200);  
});  

test("Testing if 404", async () => {    
  await supertest(app).get('/test123').expect(404);  
});

