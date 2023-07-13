const test = require('tape')
const supertest = require('supertest')
const porcent = require('./porcent')

test('Projeto NodeJs', (t) => {
    supertest(porcent)
    .get('/aplicarPorcent/30')
    .expect ('Content-Type',/json/)
    .expect(200)
    .end((err, res) => {
        t.assert(res.body.valorporcent == 100, 'Porcentagem correta')
        t.end()
    })
})