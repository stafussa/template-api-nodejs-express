//importar o pool para criar a coneção
const pool = require('../config/database');



// Função que retorna todos os itens armazenados
async function listItems() {

  // Busca todos os itens no banco de dados
const buscarItens = await pool.query('SELECT * FROM items')

// Retorna a lista de itens para o controlador
return buscarItens [0];

};

// Função que cria um novo item e o adiciona à lista
async function createItem(name) {
  // Insere um novo item na lista
const newItem = await pool.query(`INSERT INTO items (name) VALUES ('${name}')`);

return newItem[0];

};


module.exports = {
  listItems,
  createItem,
}
