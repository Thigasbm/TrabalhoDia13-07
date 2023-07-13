const express = require('express')
const porcent = express()
const bodyParser = require('body-parser')
const port = 3000 // porta padrão

porcent.use(bodyParser.urlencoded({ extended: true }));
porcent.use(bodyParser.json());


const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Projeto Funcionando!' }));

//GET /aplicarDesconto
router.get('/aplicarPorcent/:valor', (req, res) => {
    const valor = parseInt(req.params.valor)
    res.json ({valorporcent: ((valor * 100) / 30)})
})

porcent.use('/', router)

if (require.main === module){
    //inicia o servidor
    porcent.listen(port)
    console.log('Projeto Node Está Funcionando')
}

module.exports = porcent

/*
function porcentagem(n1){
    return (100 * n1) / 30;
    const n1 = 100;
}
*/