const contatoModel = require('../models/contato.model');
 
 
async function receberContatos(req, res) {
  const contatos = await contatoModel.listarContatos();
  res.json(contatos);
}
 
 
async function criarContato(req, res) {
  const { name, telefone} = req.body;
 
  if (!name) {
    return res.status(400).json({ message: 'Nome é obrigatório' });
  }
 
  if (!telefone) {
    return res.status(400).json({ message: 'Contato é obrigatório' });
  }
 
  const novoContato = await contatoModel.criarContato(name, telefone);

  if(novoContato){ 
    return res.status(201).json('contato criado com sucesso');
  }else{
    return res.status(500).json('Erro ao criar contato');
  }
};

 
 
module.exports = {
  receberContatos,
  criarContato
}
 