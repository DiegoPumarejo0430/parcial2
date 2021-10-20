const sequelize= require('sequelize');

const DB_NAME = 'dpumarejo_parcial'
const DB_USER = 'admin'
const DB_PASS = 'DPC0430'

export const database = new sequelize(

    DB_NAME ,
    DB_USER ,
    DB_PASS ,
  


{
host : 'localhost',
dialect: 'mysql',
port:3306
}



);

database.sync({force: true})

.then(function(){

    console.log("base de datos ejecutada corectamente")
})






