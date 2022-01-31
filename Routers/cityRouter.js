const express = require('express');
const dataBase = require('../Config/dataBase');
const cityBL = require('../BL/cityBL')

let router = express.Router();

router.route('/').get((req,res)=>
{
    try{
        cityBL.GetAllCity().then(data => {
            res.status(200).send(data);
        })
    }
    catch{
        res.status(400).send({message:"Sory, Thare Is error in the Server!"})
    }
})

module.exports = router;