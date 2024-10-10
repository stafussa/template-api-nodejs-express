//importar o mysql2 para criar a coneção
const mysql = require('mysql2/promise');


//criar conexação com o banco de dados
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'templeate_api',
})

//exportar a coneção
module.exports = pool