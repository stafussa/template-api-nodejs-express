const itemModel = require('../models/item.model');  // Importa o modelo de itens


// Controlador para a rota GET, que retorna todos os itens
async function getItems(req, res) {
  const items = await itemModel.listItems();  // Obtém todos os itens diretamente do modelo
  res.json(items);  // Retorna os itens no formato JSON
};

// Controlador para a rota POST, que cria um novo item
async function createItem(req, res) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }

  const newItem = await itemModel.createItem(name);
  
  if(newItem) {
    return res.status(201).json('item criado com sucesso');
  }else{
    return res.status(500).json('Erro ao criar item');
  }
};

module.exports = {
  getItems,
  createItem,
}
