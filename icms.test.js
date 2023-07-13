const test = require('tape')
const supertest = require('supertest')
const icms = require('./icms')

test('Projeto NodeJs', (t) => {
    supertest(icms)
    .get('/aplicarICMS/18')
    .expect ('Content-Type',/json/)
    .expect(200)
    .end((err, res) => {
        t.assert(res.body.valordoicms == 100, 'Este é o seu ICMS')
        t.end()
    })
})