import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/inicio/Home';
import Sobre from './components/sobre/Sobre';
import Servicos from './components/sistema/Servicos';
import Qualificacao from './components/pacotes/Qualificacao';
import Contato from './components/contato/Contato';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <Sobre />
        <Servicos />
        <Qualificacao />
        <Contato />
      </main>
    </>
  );
}

export default App;
