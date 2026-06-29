import React, { useState, useEffect } from 'react';

export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [salario, setSalario] = useState('');

  useEffect(() => {
    setFuncionarios([
      { id: 1, nome: 'João Pereira', cargo: 'Engenheiro', salario: 8000 },
      { id: 2, nome: 'Jusára Santos', cargo: 'Técnica Eletrica', salario: 5000 },
    ]);
  }, []);

  const cadastrar = () => {
    if (!nome || !cargo || !salario) return alert("Preencha todos os campos!");
    
    const novoFunc = {
      id: Date.now(),
      nome: nome,
      cargo: cargo,
      salario: salario
    };
    
    setFuncionarios([...funcionarios, novoFunc]);
    setNome('');
    setCargo('');
    setSalario('');
    alert("Funcionário cadastrado com sucesso!");
  };

  return (
    <div className="app">
      <div className="container">
        <h2>Gestão de Funcionários</h2>
        <div className="card">
          <h3>Novo Funcionário</h3>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="Cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Salário"
            value={salario}
            onChange={(e) => setSalario(e.target.value)}
          />
          <button className="cadastrar" onClick={cadastrar}>
            Cadastrar
          </button>
        </div>
        <h3>Funcionários Cadastrados</h3>
        <ul>
          {funcionarios.map(func => (
            <li key={func.id}>
              <strong>{func.nome}</strong><br/>
              {func.cargo}<br/>
              R$ {func.salario}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}