import React, { useState, useEffect } from 'react';

export default function Cidades() {
  const [cidades, setCidades] = useState([]);
  const [nome, setNome] = useState('');

  useEffect(() => {
    setCidades([
      { id: 1, nome: 'Crato' },
      { id: 2, nome: 'Paraiba' },
      { id: 3, nome: 'Nova Russas' },
    ]);
  }, []);

  const cadastrar = () => {
    if (!nome) return alert("Preencha o nome da cidade!");
    
    const novaCidade = {
      id: Date.now(),
      nome: nome
    };
    
    setCidades([...cidades, novaCidade]);
    setNome('');
    alert("Cidade cadastrada com sucesso!");
  };

  return (
    <div className="app">
      <div className="container">
        <h2>Gestão de Cidades</h2>
        <div className="card">
          <h3>Nova Cidade</h3>
          <input
            type="text"
            placeholder="Nome da Cidade"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <button className="cadastrar" onClick={cadastrar}>
            Cadastrar
          </button>
        </div>
        <h3>Cidades Cadastradas</h3>
        <ul>
          {cidades.map(cid => (
            <li key={cid.id}><strong>{cid.nome}</strong></li>
          ))}
        </ul>
      </div>
    </div>
  );
}