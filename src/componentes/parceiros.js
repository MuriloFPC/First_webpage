import React from 'react'
import {Section,Container,Column,Content,Title } from 'rbx';
import Logo from "../imagens/logo.png"


const Titulo = "PARCEIROS"
const informação = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate mauris justo, quis hendrerit nunc consectetur eget. Donec ac consectetur nibh. Vivamus ultricies, urna ac maximus mattis, urna ex sollicitudin leo, eget cursus eros tortor nec dui. Ut et mauris risus. In nisl lectus, hendrerit in dignissim ut, sollicitudin a elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse tempus lectus placerat blandit scelerisque. Cras placerat non odio eget sagittis. Suspendisse sed consectetur sem. "
const Parceiros = () => (
    <Section className="parceiros">
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