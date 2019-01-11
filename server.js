const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) //dentro da pasta atual, no qual o arquivo "server.js" está, sirva os arquivos estáticos.
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()) //aplica o código para transformar o JSON em objeto

app.get('/teste', (req, res)) => res.send('Ok')) //quando vier uma requisição do tipo get na url /teste,
//chame a função request, response e retorne "ok"

app.listen(8081, () => console.log("Executando..."))