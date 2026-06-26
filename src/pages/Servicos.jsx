import React, { useState, useEffect } from 'react';
import { servicoService } from '../services/api';

export default function Servicos() {
  const [servicos, setServicos] = useState([]);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  useEffect(() => {
    carregarServicos();
  }, []);

  const carregarServicos = async () => {
    try {
      const response = await servicoService.listar();
      setServicos(response.data);
    } catch (error) {
      console.error("Erro ao buscar serviços", error);
    }
  };

  const cadastrar = async () => {
    if (!nome || !descricao || !valor) return alert("Preencha todos os campos!");
    try {
      await servicoService.criar({ nome, descricao, valor });
      setNome('');
      setDescricao('');
      setValor('');
      carregarServicos();
    } catch (error) {
      console.error("Erro ao cadastrar", error);
    }
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


        <button 
          className="cadastrar" 
          onClick={cadastrar}
        >
          Cadastrar
        </button>


      </div>



      <h3>Serviços Cadastrados</h3>


      <ul>

        {servicos.map(serv => (

          <li key={serv.id}>

            <strong>{serv.nome}</strong>:
            {serv.descricao} -
            R$ {serv.valor}

          </li>

        ))}

      </ul>


    </div>

  </div>
);
}