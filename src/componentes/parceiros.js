import React from 'react'
import {Section,Container,Column,Content,Title } from 'rbx';
import Logo from "../imagens/logo.png"


const Parceiros = () => (
    <Section className="parceiros" id="parceiros">
    <Container >
    <Content textAlign="centered">
    <Title size={2}>PARCEIROS</Title>
        </Content>
        <Column.Group centered>
            <Column size={1}>
            <img src={Logo} alt="logo"/>
            </Column>
            <Column size={1} offset={1}>
            <img src={Logo} alt="logo"/>
            </Column>
            <Column size={1} offset={1}>
            <img src={Logo} alt="logo"/>
            </Column>
            <Column size={1} offset={1}>
            <img src={Logo} alt="logo"/>
            </Column>
            <Column size={1} offset={1}>
            <img src={Logo} alt="logo"/>
            </Column>
        </Column.Group>
        </Container>
    </Section> 

)

export default Parceiros;