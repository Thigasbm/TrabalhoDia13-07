const express = require('express')
const icms = express()
const bodyParser = require('body-parser')
const port = 3000 // porta padrão

icms.use(bodyParser.urlencoded({ extended: true }));
icms.use(bodyParser.json());


const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Projeto ICMS Funcionando!' }));

//GET /aplicarDesconto
router.get('/aplicarICMS/:valor', (req, res) => {
    const valoricms = parseInt(req.params.valor)
    res.json ({valordoicms: ((valoricms * 100) / 18)})
})

icms.use('/', router)

if (require.main === module){
    //inicia o servidor
    icms.listen(port)
    console.log('Projeto Node ICMS Está Funcionando')
}

module.exports = icms
