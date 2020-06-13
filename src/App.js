import React, { Fragment } from 'react';
import './App.scss';
import Header from './componentes/navbar';
import Inicio from './componentes/projetos_menbros';
import SobreNos from './componentes/sobre_nos';
import Fotter from "./componentes/barra_fim"
import Parceiros from './componentes/parceiros'


  document.title = 'ColetivXs';



const App = () => (
  <Fragment>
    <Header/>
    <Inicio/>
    <Parceiros/>
    <SobreNos/>
    <Fotter/>
  </Fragment>
)

export default App;
