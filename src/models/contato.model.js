const db = require('../config/database');
 

 
async function listarContatos() {
  const contatos = await db.query('SELECT * FROM contatos');
 
  return contatos[0];
}
 
async function criarContato(name, telefone) {
  const novoContato = await db.query(`INSERT INTO contatos (name, telefone) VALUES ('${name}', '${telefone}')`);
 
  return novoContato[0];
}
 
module.exports = {
  listarContatos,
  criarContato
};