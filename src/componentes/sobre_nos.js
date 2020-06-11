import React from 'react'
import {Section, Title, Container,Column } from 'rbx';

const Titulo = "Sobre nós"
const informação = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate mauris justo, quis hendrerit nunc consectetur eget. Donec ac consectetur nibh. Vivamus ultricies, urna ac maximus mattis, urna ex sollicitudin leo, eget cursus eros tortor nec dui. Ut et mauris risus. In nisl lectus, hendrerit in dignissim ut, sollicitudin a elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse tempus lectus placerat blandit scelerisque. Cras placerat non odio eget sagittis. Suspendisse sed consectetur sem. "
const SobreNos = () => (
    <Section className="Sobre_nos">
    <Container >
        <Column size="full">
     <Title size={2}>{Titulo}</Title>
        <Title subtitl size={4} >{informação}</Title>
         </Column> 
        </Container>
    </Section> 

)

export default SobreNos;