import React from 'react'
import {Section, Title, Container,Column } from 'rbx';

const Titulo = "Sobre nxs"
const SobreNos = () => (
    <Section className="Sobre_nos">
    <Container >
        <Column size="full">
     <Title size={2}>{Titulo}</Title>
        <Title subtitle size={4} >Coletivxs é uma organização horizontal feita por profissionais que apostam e lutam por uma educação que não deixa ninguém para trás. <br/> Desenvolvemos e apoiamos projetos colaborativos e inclusivos em parceria instituições governamentais e não governamentais para traçar caminhos de viabilizar o direito à Educação.</Title>
         </Column> 
        </Container>
    </Section> 

)

export default SobreNos;