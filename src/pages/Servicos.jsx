import React, { useState, useEffect } from 'react';

export default function Servicos() {
  const [servicos, setServicos] = useState([]);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  useEffect(() => {
    setServicos([
      { id: 1, nome: 'Manutenção Preventiva', descricao: 'Revisão completa', valor: 500 },
      { id: 2, nome: 'Instalação Elétrica', descricao: 'Instalação de cabos', valor: 800 },
    ]);
  }, []);

  const cadastrar = () => {
    if (!nome || !descricao || !valor) return alert("Preencha todos os campos!");
    
    const novoServico = {
      id: Date.now(),
      nome: nome,
      descricao: descricao,
      valor: valor
    };
    
    setServicos([...servicos, novoServico]);
    setNome('');
    setDescricao('');
    setValor('');
    alert("Serviço cadastrado com sucesso!");
  };

  return (
    <div className="app">
      <div className="container">
        <h2>Gestão de Serviços</h2>
        <div className="card">
          <h3>Novo Serviço</h3>
          <input 
            type="text" 
            placeholder="Nome do Serviço" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Descrição" 
            value={descricao} 
            onChange={(e) => setDescricao(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Valor Estimado" 
            value={valor} 
            onChange={(e) => setValor(e.target.value)} 
          />
          <button className="cadastrar" onClick={cadastrar}>
            Cadastrar
          </button>
        </div>
        <h3>Serviços Cadastrados</h3>
        <ul>
          {servicos.map(serv => (
            <li key={serv.id}>
              <strong>{serv.nome}</strong>: {serv.descricao} - R$ {serv.valor}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}