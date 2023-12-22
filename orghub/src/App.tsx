import React from 'react';
import "./App.module.css"

import Navbar from './componentes/Navbar/Navbar';
import Home from './componentes/Home/Home';
import Objetivo from './componentes/Objetivo/Objetivo';
import Projetos from './componentes/Projetos/Projetos';
import Membros from './componentes/Membros/Membros';
import Inscrição from './componentes/Membros/Inscrição';
import Contatos from './componentes/Contatos/Contatos';

function App() {
  return (
    <div >
      <Navbar/>
      <Home />
      <Objetivo />
      <Projetos />
      <Membros />
      <Inscrição />
      <Contatos/>
    </div>
  );
}

export default App;
