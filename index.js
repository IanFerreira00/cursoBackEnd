const express = require('express')
const {Client} = require('pg')
require("dotenv").config()
const app = express()
const client = new Client({
    host:process.env.host,
    port:process.env.port,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database
})

const connectDB = async () => {
    client
    .connect()
    .then(() => {
        console.log('a conexao funcionou');
    }).catch((err) => {
    console.error('erro ao conectar na bd')
    });
};
connectDB()


app.get('/test-api', function (req, res){
    res.send('NOSSA API TA FUNCIONANDO')
})

app.listen(8000)