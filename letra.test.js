const test = require('tape')
const supertest = require('supertest')
const letra = require('./letra')

test('Projeto NodeJs letras', (t) => {
    supertest(letra)
    .get('/defineletra/Z')
    .expect ('Content-Type',/json/)
    .expect(200)
    .end((err, res) => {
        t.assert(res.body.funcletra ===  ('z'), 'A letra é z')
        t.end()
    })
})