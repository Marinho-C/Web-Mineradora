import React, { useState, useEffect } from 'react';

export default function Equipamentos() {
  const [equipamentos, setEquipamentos] = useState([]);
  const [nome, setNome] = useState('');
  const [setor, setSetor] = useState('');

  // Carrega dados falsos ao abrir a página
  useEffect(() => {
    setEquipamentos([
      { id: 1, nome: 'Escavadeira', setor: 'Extração' },
      { id: 2, nome: 'Caminhão', setor: 'Transporte' },
      { id: 3, nome: 'Perfuratriz', setor: 'Perfuração' },
    ]);
  }, []);

  const cadastrar = () => {
    if (!nome || !setor) return alert("Preencha todos os campos!");
    
    const novoEquip = {
      id: Date.now(),
      nome: nome,
      setor: setor
    };
    
    setEquipamentos([...equipamentos, novoEquip]);
    setNome('');
    setSetor('');
    alert("Equipamento cadastrado com sucesso!");
  };

  return (
    <div className="app">
      <div className="container">
        <h2>Gestão de Equipamentos</h2>
        <div className="card">
          <h3>Novo Equipamento</h3>
          <input 
            type="text" 
            placeholder="Nome do Equipamento" 
            value={nome}
            onChange={(e) => setNome(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Setor (Ex: Extração)" 
            value={setor}
            onChange={(e) => setSetor(e.target.value)} 
          />
          <button className="cadastrar" onClick={cadastrar}>Cadastrar</button>
        </div>
        <h3>Equipamentos Cadastrados</h3>
        <ul>
          {equipamentos.map(eq => (
            <li key={eq.id}><strong>{eq.nome}</strong> - Setor: {eq.setor}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}