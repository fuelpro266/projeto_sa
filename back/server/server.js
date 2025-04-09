const express = require("express");
const app = express();
app.use(express.json());

app.get('/Constar-Api', async (req,res) => {
    try{
        const resposta = await fetch("https://8ce6d78d-e58a-4bec-9296-18cdf3509714-00-1m4lisu2dizfq.riker.replit.dev/");
        const dados = await resposta.json();
        res.send(dados)
    }catch(error){
    console.log("Erro" + error)
    }

})

app.listen(3001);