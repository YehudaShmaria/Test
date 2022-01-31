const res = require('express/lib/response');
const DB = require('../Config/dataBase');


const GetAllCity = () =>
{
    return new Promise((resolve,reject)=>{
        DB.query("SELECT Name FROM world.city", function (err, result, fields) {
            if (err)
            {
                reject(err);
            }
            else
            {
                resolve(result)
            }
          });
  });
}

module.exports = {GetAllCity}