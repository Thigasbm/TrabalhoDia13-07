const express = require('express')
const letra = express()
const bodyParser = require('body-parser')
const port = 3000 // porta padrão

letra.use(bodyParser.urlencoded({ extended: true }));
letra.use(bodyParser.json());


const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Projeto Funcionando!' }));

//GET /aplicarDesconto
router.get('/defineletra/:letras', (req, res) => {
    const texto = req.params.letras.toLowerCase()

    res.json ({funcletra: texto.substring(0,1)})
})

letra.use('/', router)

if (require.main === module){
    //inicia o servidor
    letra.listen(port)
    console.log('Projeto das letras está funcionando')
}

module.exports = letra