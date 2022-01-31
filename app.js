const express = require('express')
require('./Config/dataBase');
const cityRouter = require('./Routers/cityRouter')

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    try{
        res.status(200).send("Hello Thare!")
    }
    catch{
        res.status(400).send({message:"Sory, Thare Is error in the Server!"})
    }
})
app.use('/city',cityRouter);

app.listen(PORT,()=>{
    console.log(`App Listen On Port ${PORT}`);
})