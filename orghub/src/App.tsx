import React from 'react';
import "./App.module.css"

import Navbar from './componentes/Navbar/Navbar';
import Home from './componentes/Home/Home';
import Objetivo from './componentes/Objetivo/Objetivo';
import Projetos from './componentes/Projetos/Projetos';
import Inscricao from './componentes/Inscricao/Inscricao';
import Contatos from './componentes/Contatos/Contatos';
import MembrosArray from './componentes/Membros/MembrosArray';

function App() {
  return (
    <div >
      <Navbar/>
      <div id="Home">
        <Home />
      </div>
      <div id="Objetivo">
        <Objetivo />
      </div>
      <div id="Projetos">
        <Projetos />
      </div>
      <div id="Membros">
        <MembrosArray />
      </div>
      <div id="Inscricao">
        <Inscricao />
      </div>
      <div id="Contatos">
        <Contatos />
      </div>
    </div>
  );
}

export default App;
