import React from 'react';
import "./App.module.css"

import Navbar from './componentes/Navbar/Navbar';
import Home from './componentes/Home/Home';
import Objetivo from './componentes/Objetivo/Objetivo';
import Projetos from './componentes/Projetos/Projetos';
import Membros from './componentes/Membros/Membros';
import Inscricao from './componentes/Inscricao/Inscricao';
import Contatos from './componentes/Contatos/Contatos';
import Footer from './componentes/Footer/Footer';

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
        <Membros />
      </div>
      <div id="Inscricao">
        <Inscricao />
      </div>
      <div id="Contatos">
        <Contatos />
      </div>
      <div id="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
