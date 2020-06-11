import React, { Fragment } from 'react';
import './App.scss';
import Header from './componentes/navbar';
import Inicio from './componentes/projetos_menbros';
import SobreNos from './componentes/sobre_nos';
import Contato from './componentes/contato'
import Fotter from "./componentes/barra_fim"
import Parceiros from './componentes/parceiros'


const App = () => (
  <Fragment>
    <Header/>
    <Inicio classNmae="" />
    <Parceiros/>
    <SobreNos/>
    <Contato/>
    <Fotter/>
  </Fragment>
)

export default App;
