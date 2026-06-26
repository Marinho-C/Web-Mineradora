import React, { useState, useEffect } from 'react';
import { cidadeService } from '../services/api';

export default function Cidades() {
  const [cidades, setCidades] = useState([]);
  const [nome, setNome] = useState('');

  useEffect(() => {
    carregarCidades();
  }, []);

  const carregarCidades = async () => {
    try {
      const response = await cidadeService.listar();
      setCidades(response.data);
    } catch (error) {
      console.error("Erro ao buscar cidades", error);
    }
  };

  const cadastrar = async () => {
    if (!nome) return alert("Preencha o nome da cidade!");
    try {
      await cidadeService.criar({ nome });
      setNome('');
      carregarCidades();
    } catch (error) {
      console.error("Erro ao cadastrar", error);
    }
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


        <button 
          className="cadastrar" 
          onClick={cadastrar}
        >

          Cadastrar

        </button>


      </div>




      <h3>Cidades Cadastradas</h3>


      <ul>


        {cidades.map(cid => (

          <li key={cid.id}>

            <strong>{cid.nome}</strong>


          </li>

        ))}


      </ul>



    </div>


  </div>


);
}