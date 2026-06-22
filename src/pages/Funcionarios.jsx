import React, { useState, useEffect } from 'react';
import { funcionarioService } from '../services/api';

export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [salario, setSalario] = useState('');

  useEffect(() => {
    carregarFuncionarios();
  }, []);

  const carregarFuncionarios = async () => {
    try {
      const response = await funcionarioService.listar();
      setFuncionarios(response.data);
    } catch (error) {
      console.error("Erro ao buscar funcionários", error);
    }
  };

  const cadastrar = async () => {
    if (!nome || !cargo || !salario) return alert("Preencha todos os campos!");
    try {
      await funcionarioService.criar({ nome, cargo, salario });
      setNome('');
      setCargo('');
      setSalario('');
      carregarFuncionarios();
    } catch (error) {
      console.error("Erro ao cadastrar", error);
    }
  };

  return (
    <div>
      <h2>Gestão de Funcionários</h2>
      <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <h3>Novo Funcionário</h3>
        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} style={{ marginRight: '10px', marginBottom: '5px' }} />
        <input type="text" placeholder="Cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} style={{ marginRight: '10px', marginBottom: '5px' }} />
        <input type="text" placeholder="Salário" value={salario} onChange={(e) => setSalario(e.target.value)} style={{ marginRight: '10px', marginBottom: '5px' }} />
        <button onClick={cadastrar}>Cadastrar</button>
      </div>
      <h3>Funcionários Cadastrados</h3>
      <ul>
        {funcionarios.map(func => (
          <li key={func.id}><strong>{func.nome}</strong> - {func.cargo} (R$ {func.salario})</li>
        ))}
      </ul>
    </div>
  );
}